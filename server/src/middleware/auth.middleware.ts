import User from "./../models/User/User";
import OTPUtil from "./../utility/otp";
import express from "express";
import jwt from "jsonwebtoken";

const JWT_AUTH_TOKEN = process.env.JWT_AUTH_TOKEN || "";

const auth = {
  // Checks whether user with same email exists, and depending on login/register method sends response
  userExists(method: string) {
    return async (
      req: express.Request,
      res: express.Response,
      next: express.NextFunction
    ): Promise<express.Response | void> => {
      const email = req.body.email;

      const user1 = await User.findOne({ email: email }).lean();
      let pass = true;
      if (method === "login") {
        if (user1) pass = true;
      }
      if (method === "register") {
        if (user1) pass = false;
      }

      if (!pass) {
        res.status(422).json({
          error: "Email already exists"
        });
      } else {
        next();
      }
    };
  },

  // Verifies otp sent with login/register request
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
      return res.status(response.code).json({
        error: response.msg
      });
    }
    delete req.body.hash;
    delete req.body.otp;
    next();
  },

  // Middleware to check for user authentication
  isAuthenticated(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): express.Response | void {
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(" ")[1];

      jwt.verify(
        token,
        JWT_AUTH_TOKEN,
        async (err, user): Promise<express.Response | void> => {
          if (user) {
            req.body.user = user;
            next();
          } else if (err && err.message === "TokenExpiredError") {
            return res.status(403).send({
              success: false,
              msg: "Access token expired"
            });
          } else {
            console.log(err);
            return res.status(403).send({ err, msg: "User not authenticated" });
          }
        }
      );
    } else {
      return res.status(400).json({ err: "Bad request header" });
    }
  }
};

export = auth;
