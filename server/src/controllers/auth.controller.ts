import OTPUtil = require("./../utility/otp");
import User from "./../models/User/User";
import jwt from "jsonwebtoken";
import express from "express";
import IUser from "src/models/User/IUser";

const JWT_AUTH_TOKEN = process.env.JWT_AUTH_TOKEN || "DSC_IS_GREAT";

const AuthController = {
  // Sends Hash and OTP for login/register routes
  sendOTP(req: express.Request, res: express.Response): express.Response {
    const [otp, hash] = OTPUtil.generateOtpHash(req.body.email);
    console.log("otp: ", otp); // Change this console.log to a nodemailer/twilio implementation
    return res.status(200).json({ hash: hash, email: req.body.email });
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
          expiresIn: "5h"
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
      const user: IUser = await User.findOne({
        email: req.body.email
      })
        .select({
          _id: 1,
          name: 1,
          email: 1,
          mobileNumber: 1
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
            expiresIn: "5h"
          }
        );

        return res.status(201).json({
          user: user,
          token: token
        });
      } else {
        return res.status(404).json({
          error: "Requested user not found"
        });
      }
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        error: err.message
      });
    }
  }
};

export = AuthController;
