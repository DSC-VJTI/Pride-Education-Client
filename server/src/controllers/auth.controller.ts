import OTPUtil = require("./../utility/otp");
import User from "./../models/User/User";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import express from "express";

dotenv.config();
const JWT_AUTH_TOKEN = process.env.JWT_AUTH_TOKEN || "";

const AuthController = {
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
            email: user.email,
            mobileNumber: user.mobileNumber
          }
        },
        JWT_AUTH_TOKEN,
        {
          expiresIn: "1h"
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
  }
};

export = AuthController;
