import express from "express";
import AuthController from "./controllers/auth.controller";
import ProductController from "./controllers/product.controller";
import auth from "./middleware/auth.middleware";
import admin from "./controllers/admin.controller";
import adminMiddleware from "./middleware/admin.middleware";
import CartController from "./controllers/cart.controller";
import OrderController from "./controllers/order.controller";
import uploader from "./utility/uploader";
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
router.get("/products", ProductController.getProducts);
router.get("/products/:id", ProductController.getProductById);
router.get("/products/filter/:id", ProductController.getProductsByFilter);

router.post(
  "/admin/createProduct/",
  auth.isAuthenticated,
  adminMiddleware.isAdmin,
  uploader.single("book"),
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

//cart routes
router.post("/cart", CartController.showCart);
router.post("/cart/:productId", CartController.addToCart);
router.delete("/cart/:productId", CartController.removeFromCart);

// Order routes
router.get("/orders", OrderController.getOrders);
router.get("/orders/:id", OrderController.getOrderById);
router.get("/orders/user/:user_id", OrderController.getOrdersByUserId);
router.post("/orders", OrderController.addOrder);

// Payment routes
router.post("/pay/:paymentId", OrderController.payAmount);

export default router;
