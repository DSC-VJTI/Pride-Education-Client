import express from "express";
import AuthController from "./controllers/auth.controller";
import { getProducts, getProductById } from "./controllers/product.controller";
import auth from "./middleware/auth.middleware";

const router = express.Router();

// Basic route
router.get("/", (_, res) => {
  res.status(200).json({ payload: "Hello" });
});

//Auth routes
router.post(
  "/sendOtpRegister",
  auth.userExists("register"),
  AuthController.sendOTP
);
router.post("/register", auth.verifyOTP, AuthController.register);
router.post("/sendOtpLogin", auth.userExists("login"), AuthController.sendOTP);
router.post("/login", auth.verifyOTP, AuthController.login);

// Product routes
router.get("/products", getProducts);
router.get("/products/:id", getProductById);
router.get("/products/filter/:id", getProductById);

export default router;
