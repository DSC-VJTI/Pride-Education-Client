import User from "./../models/User/User";
import express from "express";

const admin = {
  //Middleware to check if the user is admin
  async isAdmin(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): Promise<express.Response | void> {
    const user = await User.findById(req.body.userId);
    if (user != null && user.isAdmin == true) {
      next();
    } else {
      return res.status(403).send({ error: "User not an Admin" });
    }
  }
};

export = admin;
