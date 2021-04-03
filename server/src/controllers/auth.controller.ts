import OTPUtil = require("./../utility/otp");
import User from "./../models/User/User";
import express from "express";
import IUser from "src/models/User/IUser";
import jwtHandler from "../utility/jwt";
import sendOtpEmail from "../utility/mailer";

const AuthController = {
  // Sends Hash and OTP for login/register routes
  sendOTP(req: express.Request, res: express.Response): express.Response {
    const [otp, hash] = OTPUtil.generateOtpHash(req.body.email);
    sendOtpEmail(req.body.email, otp);
    return res.status(200).json({ hash: hash, email: req.body.email });
  },

  async register(
    req: express.Request,
    res: express.Response
  ): Promise<express.Response> {
    try {
      const user = await User.create(req.body);

      const token = jwtHandler.setJwt(user);
      return res.status(201).json({
        user: user,
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
        const token = jwtHandler.setJwt(user);
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
      return res.status(500).json({
        error: err.message
      });
    }
  }
};

export = AuthController;
