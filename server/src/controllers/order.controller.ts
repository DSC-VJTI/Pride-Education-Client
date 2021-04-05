import { Request, Response } from "express";
import Order from "../models/Order/Order";
//import User from "../models/User/User";

const OrderController = {
  async getOrders(_: Request, res: Response): Promise<Response> {
    try {
      const data = await Order.find({});

      return res.status(200).json({ data });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  async getOrderById(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const data = await Order.findById(id);

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
      const { user_id } = req.params;
      const data = await Order.find({ user: user_id });

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
  }
};

export = OrderController;
