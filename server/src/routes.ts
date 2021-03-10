import express from "express";
import AuthController from "./controllers/auth.controller";
import auth from "./middleware/auth.middleware";
import admin from "./controllers/admin.controller";
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

router.post("/admin/product/:userId", auth.isAdmin, admin.newProduct);
router.put("/admin/product/:userId/:id", auth.isAdmin, admin.editProduct);
router.delete("/admin/product/:userId/:id", auth.isAdmin, admin.deleteProduct);
router.get("/admin/users/:userId", auth.isAdmin, admin.getUsers);

export default router;
