import express from "express";
import AuthController from "./controllers/auth.controller";
import auth from "./middleware/auth.middleware";

const router = express.Router();

// Basic route
router.get("/", (_, res) => {
  res.status(200).json({ payload: "Hello" });
});

//Auth routes
router.post("/sendOTP", auth.userExists, AuthController.sendOTP);
router.post("/register", auth.verifyOTP, AuthController.register);

export default router;
