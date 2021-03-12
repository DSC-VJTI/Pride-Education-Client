import express from "express";
import AuthController from "./controllers/auth.controller";
import auth from "./middleware/auth.middleware";
import CartController from "./controllers/cart.controller";

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

//cart routes
router.post("/cart", CartController.showCart);
router.post("/cart/:productId", CartController.addToCart);
router.delete("/cart/:productId", CartController.removeFromCart);

export default router;
