import express from "express";
import Cart from "../models/Cart/Cart";

const cartController = {
  async showCart(
    req: express.Request,
    res: express.Response
  ): Promise<express.Response | void> {
    try {
      const { userId } = req.params;
      const myCart = await Cart.findById({ user: userId });
      return res.status(200).json({ myCart });
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
      const { userId, productId } = req.params;
      let myCart;
      myCart = await Cart.findById({ user: userId });
      if (!myCart) {
        myCart = await Cart.create({ user: userId, products: [] });
      }
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
      const { userId, productId } = req.params;
      const myCart = await Cart.findByIdAndUpdate(
        { user: userId },
        {
          $pull: { products: [productId] }
        }
      );
      return res.status(201).json({ myCart });
    } catch (err) {
      return res.status(500).json({
        error: err.message
      });
    }
  }
};

export = cartController;
