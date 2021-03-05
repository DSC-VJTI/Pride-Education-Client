import User from "./../models/User/User";
import OTPUtil from "./../utility/otp";
import express from "express";

const auth = {
  async userExists(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): Promise<express.Response | void> {
    const email = req.body.email;

    const user1 = await User.findOne({ email: email }).lean();
    if (user1) {
      res.status(422).json({
        error: "Email already exists"
      });
    } else {
      next();
    }
  },
  async verifyOTP(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): Promise<express.Response | void> {
    const response = OTPUtil.verifyOTP(
      req.body.email,
      req.body.hash,
      req.body.otp
    );
    if (response.code !== 200) {
      res.status(response.code).json({
        error: response.msg
      });
    }
    delete req.body.hash;
    delete req.body.otp;
    next();
  }
};

export = auth;
