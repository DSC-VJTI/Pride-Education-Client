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

router.post("/admin/product/", admin.newProduct);
router.put("/admin/product/:id", admin.editProduct);
router.delete("/admin/product/:id", admin.deleteProduct);
router.get("/admin/users", admin.allUsers);

export default router;
