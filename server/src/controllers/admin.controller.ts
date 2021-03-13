import User from "../models/User/User";
import Product from "../models/Product/Product";

import express from "express";

const AdminController = {
  async newProduct(
    req: express.Request,
    res: express.Response
  ): Promise<express.Response> {
    try {
      const product = await Product.create({ ...req.body });
      return res.status(201).json({
        product
      });
    } catch (err) {
      return res.status(500).json({
        error: err.message
      });
    }
  },

  async editProduct(
    req: express.Request,
    res: express.Response
  ): Promise<express.Response> {
    try {
      const product = await Product.findByIdAndUpdate(
        req.params.productId,
        req.body,
        {
          upsert: true,
          new: true
        }
      );

      return res.status(200).json({
        product,
        message: "Product Updated Successfully"
      });
    } catch (err) {
      return res.status(500).json({
        message: err.message
      });
    }
  },

  async deleteProduct(
    req: express.Request,
    res: express.Response
  ): Promise<express.Response> {
    try {
      await Product.findByIdAndDelete(req.params.productId);
      return res.status(200).json({
        message: "Successfully Deleted"
      });
    } catch (err) {
      return res.status(500).json({
        message: err.message
      });
    }
  },

  async getUsers(
    _: express.Request,
    res: express.Response
  ): Promise<express.Response | void> {
    try {
      const allUsers = await User.find({}).lean();
      return res.status(200).json({
        allUsers
      });
    } catch (err) {
      return res.status(500).json({
        message: err.message
      });
    }
  }
};

export = AdminController;
