import { Request, Response } from "express";
import Product from "../models/Product/Product";
import Course from "../models/Product/Course";

const ProductController = {
  async getProducts(_: Request, res: Response): Promise<Response> {
    try {
      const data = await Product.find({})
        .populate({
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
        })
        .populate({
          path: "test",
          select: ["subject", "contents"]
        })
        .populate({
          path: "book",
          select: ["url", "_id", "file"]
        });
      return res.status(200).json({ data });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  async getProductById(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const data = await Product.findById(id)
        .populate({
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
        })
        .populate({
          path: "test",
          select: ["subject", "contents"]
        })
        .populate({
          path: "book",
          select: ["url"]
        });

      if (data) {
        return res.status(200).json({ data });
      } else {
        return res.status(404).json({ message: "Product doesn't exist" });
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  async getCoursesByFilter(req: Request, res: Response): Promise<Response> {
    try {
      const data = await Course.findOne(req.body);
      if (data) {
        const course = await Product.findOne({ course: data._id }).populate({
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
        });
        return res.status(200).json({ course });
      }
      return res.status(200).json({ data });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export = ProductController;
