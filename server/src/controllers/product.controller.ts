import { Request, Response } from "express";
import Product from "../models/Product/Product";

export const getProducts = async (_: any, res: Response) => {
  try {
    const data = await Product.find({});

    return res.status(201).json({ data });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getProductById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await Product.findById(id);

    if (data) {
      return res.status(201).json({ data });
    } else {
      return res.status(404).json({ message: "Product doesn't exists" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
