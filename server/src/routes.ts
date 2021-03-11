import express from "express";
import AuthController from "./controllers/auth.controller";
import auth from "./middleware/auth.middleware";
import admin from "./controllers/admin.controller";
import adminMiddleware from "./middleware/admin.middleware";
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

router.post(
  "/admin/createProduct/",
  auth.isAuthenticated,
  adminMiddleware.isAdmin,
  admin.newProduct
);
router.put(
  "/admin/editProduct/:productId",
  auth.isAuthenticated,
  adminMiddleware.isAdmin,
  admin.editProduct
);
router.delete(
  "/admin/deleteProduct/:productId",
  auth.isAuthenticated,
  adminMiddleware.isAdmin,
  admin.deleteProduct
);
router.post(
  "/admin/getUsers",
  auth.isAuthenticated,
  adminMiddleware.isAdmin,
  admin.getUsers
);

export default router;
