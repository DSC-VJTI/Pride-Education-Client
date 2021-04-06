import { Request, Response } from "express";
import Order from "../models/Order/Order";

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
  /* async payAmount(req: Request, res: Response): Promise<Response> {
     const options = {
       method: "POST",
       url: `https://${process.env.key_id}:${process.env.key_secret}@api.razorpay.com/v1/payments/${req.params.paymentId}/capture`,
       form: {
         amount: 100,
         currency: "INR"
       }
     };
     try {
       request(options, async (_: any, response: Response) => {
         console.log(response.statusCode);
         const userId = req.body.user._id;
         const user = await User.findById({user:userId});
         //iterate for all OrderId in the cart
         if (user != null && response.statusCode === 200) {
           user.transactions.push({
             amount: 100,
             transactionId: req.params.paymentId,
             orderId: req.body.orderId,
             time: new Date().getTime()
           });
           await user.save();
         }
         //logic for emptying cart to be written
       });
       return res.status(200).json({ message: "Successful" });
     } catch (err) {
       console.log(err);
       return res.status(500).json({ message: err.message });
     }
   }*/
};

export = OrderController;
