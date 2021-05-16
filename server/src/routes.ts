import express from "express";
import AuthController from "./controllers/auth.controller";
import ProductController from "./controllers/product.controller";
import auth from "./middleware/auth.middleware";
import admin from "./controllers/admin.controller";
import adminMiddleware from "./middleware/admin.middleware";
import CartController from "./controllers/cart.controller";
import OrderController from "./controllers/order.controller";
import uploader from "./utility/uploader";
import QueryController from "./controllers/query.controller";
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
router.get("/verifyToken", auth.isAuthenticated);

// Product routes
router.get("/products", ProductController.getProducts);
router.get("/products/:id", ProductController.getProductById);
router.post("/product/filter", ProductController.getCoursesByFilter);

router.post(
  "/admin/createProduct/",
  auth.isAuthenticated,
  adminMiddleware.isAdmin,
  uploader.array("files"),
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
router.get(
  "/admin/getCountUsers",
  auth.isAuthenticated,
  adminMiddleware.isAdmin,
  admin.getNumberOfCustomers
);

//cart routes
router.post("/cart", auth.isAuthenticated, CartController.showCart);
router.post("/cart/:productId", auth.isAuthenticated, CartController.addToCart);
router.delete(
  "/cart/:productId",
  auth.isAuthenticated,
  CartController.removeFromCart
);

// Order routes
router.get("/orders", auth.isAuthenticated, OrderController.getOrders);
router.get("/orders/:id", auth.isAuthenticated, OrderController.getOrderById);
router.post(
  "/orders/user",
  auth.isAuthenticated,
  OrderController.getOrdersByUserId
);
router.post("/orders", auth.isAuthenticated, OrderController.addOrder);

// Payment routes
router.post("/pay/:paymentId", OrderController.payAmount);

// Query routes
router.get(
  "/queries",
  auth.isAuthenticated,
  adminMiddleware.isAdmin,
  QueryController.getQueries
);
router.get(
  "/queries/getCount",
  auth.isAuthenticated,
  adminMiddleware.isAdmin,
  QueryController.getCountQueries
);
router.post("/queries", QueryController.addQuery);
router.put(
  "/queries",
  auth.isAuthenticated,
  adminMiddleware.isAdmin,
  QueryController.updateQuery
);
router.delete(
  "/queries/:id",
  auth.isAuthenticated,
  adminMiddleware.isAdmin,
  QueryController.deleteQuery
);

export default router;
