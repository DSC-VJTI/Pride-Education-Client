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
      product.save().catch((err) => console.log("Error saving product ", err));
      return res.status(200).json({
        product
      });
    } catch (err) {
      return res.status(500).json({
        message: err.message
      });
    }
  },

  async editProduct(
    req: express.Request,
    res: express.Response
  ): Promise<express.Response> {
    try {
      const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        upsert: true,
        new: true
      });
      product
        .save()
        .catch((err) => console.log("Error updating product ", err));
      return res.status(200).json({
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
      await Product.findByIdAndDelete(req.params.id);
      return res.status(200).json({
        message: "Successfully Deleted"
      });
    } catch (err) {
      return res.status(500).json({
        message: err.message
      });
    }
  },

  async allUsers(res: express.Response): Promise<express.Response> {
    try {
      const allUsers = await User.find({});
      return res.status(200).json({
        allUsers: allUsers.map((user) => {
          return user.toObject();
        })
      });
    } catch (err) {
      return res.status(500).json({
        message: err.message
      });
    }
  }
};

export = AdminController;
