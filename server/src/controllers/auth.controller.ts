import OTPUtil = require("./../utility/otp");
import User from "./../models/User/User";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import express from "express";

dotenv.config();
const JWT_AUTH_TOKEN = process.env.JWT_AUTH_TOKEN || "";

const AuthController = {
  // Sends Hash and OTP for login/register routes
  sendOTP(req: express.Request, res: express.Response): express.Response {
    const [otp, hash] = OTPUtil.generateOtpHash(req.body.email);
    console.log("otp: ", otp); // Change this console.log to a nodemailer/twilio implementation
    return res.send({ hash: hash, email: req.body.email });
  },

  async register(
    req: express.Request,
    res: express.Response
  ): Promise<express.Response> {
    try {
      const user = await User.create(req.body);

      const token = jwt.sign(
        {
          user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            mobileNumber: user.mobileNumber
          }
        },
        JWT_AUTH_TOKEN,
        {
          expiresIn: "1m"
        }
      );

      return res.status(201).json({
        name: user.name,
        token: token
      });
    } catch (err) {
      return res.status(500).json({
        error: err.message
      });
    }
  },

  async login(
    req: express.Request,
    res: express.Response
  ): Promise<express.Response | void> {
    try {
      const user = await User.findOne({
        email: req.body.email
      })
        .select({
          _id: 1,
          name: 1,
          email: 1,
          mobile: 1
        })
        .lean();

      if (user) {
        const token = jwt.sign(
          {
            user: {
              _id: user._id,
              name: user.name,
              email: user.email,
              mobileNumber: user.mobileNumber
            }
          },
          JWT_AUTH_TOKEN,
          {
            expiresIn: "1m"
          }
        );

        return res.status(201).json({
          user: user,
          token: token
        });
      }
    } catch (err) {
      return res.status(500).json({
        error: err.message
      });
    }
  }
};

export = AuthController;
