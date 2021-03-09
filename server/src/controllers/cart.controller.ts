import express from "express";
import Cart from "../models/Cart/Cart";

const cartController = {
  async showCart(
    req: express.Request,
    res: express.Response
  ): Promise<express.Response | void> {
    try {
      const userId = req.body.user._id;
      const myCart = await Cart.findById({ userId });
      return res.status(201).json({ myCart });
    } catch (err) {
      return res.status(500).json({
        error: err.message
      });
    }
  },

  async addToCart(
    req: express.Request,
    res: express.Response
  ): Promise<express.Response | void> {
    try {
      const { productId } = req.params;
      const userId = req.body.user._id;
      const myCart = (await Cart.findById(userId)) || new Cart();
      myCart.user = userId;
      myCart.products.push(productId);
      await myCart.save();
      return res.status(201).json({ myCart });
    } catch (err) {
      return res.status(500).json({
        error: err.message
      });
    }
  },

  async removeFromCart(
    req: express.Request,
    res: express.Response
  ): Promise<express.Response | void> {
    try {
      const { productId } = req.params;
      const userId = req.body.user._id;
      const myCart = await Cart.findByIdAndUpdate(userId, {
        $pull: { products: [productId] }
      });
      return res.status(201).json({ myCart });
    } catch (err) {
      return res.status(500).json({
        error: err.message
      });
    }
  }
};

export = cartController;
