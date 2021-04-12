import { Request, Response } from "express";
import Order from "../models/Order/Order";
import User from "../models/User/User";
import Cart from "../models/Cart/Cart";
import request from "request";

const OrderController = {
  async getOrders(_: Request, res: Response): Promise<Response> {
    try {
      const data = await Order.find({})
        .populate([
          {
            path: "user",
            select: ["name"]
          },
          {
            path: "products",
            select: ["_id", "name", "price", "discount"],
            populate: [
              {
                path: "course",
                select: [
                  "mode",
                  "faculty",
                  "level",
                  "subject",
                  "type",
                  "applicableExamDate",
                  "language",
                  "duration",
                  "sysReq",
                  "views",
                  "validity"
                ]
              },
              {
                path: "test",
                select: ["subject", "contents"]
              },
              {
                path: "book",
                select: ["url", "_id", "file"]
              }
            ]
          }
        ])
        .lean();

      return res.status(200).json({ data });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  async getOrderById(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const data = await Order.findById(id)
        .populate({
          path: "products",
          select: ["_id", "name", "price", "discount"],
          populate: [
            {
              path: "course",
              select: [
                "mode",
                "faculty",
                "level",
                "subject",
                "type",
                "applicableExamDate",
                "language",
                "duration",
                "sysReq",
                "views",
                "validity"
              ]
            },
            {
              path: "test",
              select: ["subject", "contents"]
            },
            {
              path: "book",
              select: ["url", "_id", "file"]
            }
          ]
        })
        .lean();

      if (data) {
        return res.status(200).json({ data });
      } else {
        return res.status(404).json({ message: "Order doesn't exist" });
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  async getOrdersByUserId(req: Request, res: Response): Promise<Response> {
    try {
      const user_id = req.body.user._id;
      const data = await Order.find({ user: user_id })
        .populate({
          path: "products",
          select: ["_id", "name", "price", "discount"],
          populate: [
            {
              path: "course",
              select: [
                "mode",
                "faculty",
                "level",
                "subject",
                "type",
                "applicableExamDate",
                "language",
                "duration",
                "sysReq",
                "views",
                "validity"
              ]
            },
            {
              path: "test",
              select: ["subject", "contents"]
            },
            {
              path: "book",
              select: ["url", "_id", "file"]
            }
          ]
        })
        .lean();
      return res.status(200).json({ data });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  async addOrder(req: Request, res: Response): Promise<Response> {
    try {
      const newOrder = new Order({
        user: req.body.user,
        products: req.body.products,
        total: req.body.total,
        address: req.body?.address,
        coupon: req.body?.coupon
      });

      await newOrder.save();

      return res.status(201).json({ newOrder });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  async payAmount(req: Request, res: Response): Promise<Response> {
    let isPaymentSucess = true;
    try {
      request(
        {
          method: "POST",
          url: `https://${process.env.key_id}:${process.env.key_secret}@api.razorpay.com/v1/payments/${req.params.paymentId}/capture`,
          form: {
            amount: req.body.total,
            currency: "INR"
          }
        },
        async (error: any, response: request.Response) => {
          if (error) isPaymentSucess = false;
          else {
            const userId = req.body.user._id;
            const user = await User.findById(userId);
            if (user != null && response.statusCode === 200) {
              try {
                const newOrder = new Order({
                  user: userId,
                  products: req.body.productIds,
                  total: req.body.total,
                  address: req.body?.address,
                  coupon: req.body?.coupon
                });
                await newOrder.save();

                user.transactions.push({
                  amount: req.body.total,
                  transactionId: req.params.paymentId,
                  orderId: newOrder._id,
                  time: new Date().getTime()
                });
                await user.save();
                await Cart.findOneAndUpdate(
                  { user: userId },
                  { products: [] },
                  { new: true }
                );
              } catch (err) {
                isPaymentSucess = false;
              }
            } else {
              isPaymentSucess = false;
            }
          }
        }
      );
      if (isPaymentSucess == true)
        return res.status(200).json({ message: "Successful Payment" });
      else return res.status(200).json({ message: "Error Occured" });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }
};

export = OrderController;
