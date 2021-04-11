import User from "./../models/User/User";
import OTPUtil from "./../utility/otp";
import express from "express";
import jwtHandler, { IJWTResponse } from "../utility/jwt";

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
      if (method === "login") {
        if (user1) next();
        else return res.status(404).json({ error: "Email not found" });
      }

      if (method === "register") {
        if (user1)
          return res.status(422).json({
            error: "Email already exists"
          });
        else next();
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
      const response: IJWTResponse = jwtHandler.verifyJWT(token);
      if (response.success) {
        req.body = { ...req.body, ...response.jwtPayload };
        next();
        return res
          .status(200)
          .json({ success: response.success, message: "Is authenticated" });
      } else {
        const { success, error } = response;
        return res.status(403).send({
          success,
          error
        });
      }
    } else {
      return res.status(400).json({ error: "Bad request header" });
    }
  }
};

export = auth;
