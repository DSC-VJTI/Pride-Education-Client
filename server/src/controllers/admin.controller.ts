import express from "express";
import Book from "../models/Product/Book";
import Course from "../models/Product/Course";
import Test from "../models/Product/Test";
import Product from "../models/Product/Product";
import User from "../models/User/User";
import bucket from "../config/firebase";

interface ICourseBody {
  level: string;
  subject: string;
  faculty: string;
  type: string;
  applicableExamDate: Date;
  language: string;
  duration: number;
  sysReq: string;
  views: number;
  validity: number;
  mode: string;
}

interface ITestBody {
  subject: string;
  contents: string;
}

interface IBookBody {
  url: string;
}

interface IProductBody {
  name: string;
  price: number;
  discount: number;
  type: "course" | "test" | "book";
  course?: ICourseBody;
  test?: ITestBody;
  book?: IBookBody;
  imageUrl?: string;
}

const AdminController = {
  async newProduct(
    req: express.Request,
    res: express.Response
  ): Promise<express.Response> {
    try {
      const { name, discount, price, type } = req.body as IProductBody;
      if (!req.files) {
        return res.status(400).send("No file uploaded.");
      }
      // req.files[0] is always the product image
      // Create new blob in the bucket referencing the file
      const files = req.files as Array<Express.Multer.File>;
      const blob = bucket.file(files[0].originalname);

      const imageUrl = `https://firebasestorage.googleapis.com/v0/b/${
        bucket.name
      }/o/${encodeURI(blob.name)}?alt=media`;

      // Create writable stream and specifying file mimetype
      const blobWriter = blob.createWriteStream({
        metadata: {
          contentType: files[0].mimetype
        }
      });

      blobWriter.on("error", (err) =>
        res.status(500).json({ error: err.message })
      );

      blobWriter.end(files[0].buffer);
      let product = new Product({ name, discount, price, imageUrl });
      switch (type) {
        case "course":
          product.course = await Course.create(JSON.parse(req.body.course));
          break;
        case "book": {
          if (files.length < 2) {
            return res.status(400).send("No file uploaded.");
          }
          // Create new blob in the bucket referencing the file
          const blob = bucket.file(files[1].originalname);

          const url = `https://firebasestorage.googleapis.com/v0/b/${
            bucket.name
          }/o/${encodeURI(blob.name)}?alt=media`;
          const book = await Book.create({ url, file: files[1].originalname });

          // Create writable stream and specifying file mimetype
          const blobWriter = blob.createWriteStream({
            metadata: {
              contentType: files[1].mimetype
            }
          });

          blobWriter.on("error", (err) =>
            res.status(500).json({ error: err.message })
          );

          blobWriter.end(files[1].buffer);
          product.book = book;
          break;
        }
        case "test":
          product.test = await Test.create(JSON.parse(req.body.test));
          break;
        default: {
          return res.status(400).json({
            error:
              "Any one out of course, test or book expected in res.body.type"
          });
        }
      }
      product = await product.save();
      return res.status(201).json({
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
      const product = await Product.findById(req.params.productId);
      if (product) {
        const { type } = req.body;
        switch (type) {
          case "course":
            product.course = await Course.findByIdAndUpdate(
              product.course._id,
              req.body.course,
              { upsert: true, new: true }
            );
            break;
          case "book":
            return res
              .status(400)
              .json({ error: "Books cannot be edited at this time" });
          case "test":
            product.test = await Test.findByIdAndUpdate(
              product.test._id,
              req.body.test,
              { upsert: true, new: true }
            );
            break;
          default:
            return res.status(400).json({
              error:
                "Any one out of course, test or book expected in res.body.type"
            });
        }
        const newProduct = await Product.findByIdAndUpdate(
          req.params.productId,
          req.body,
          { upsert: true, new: true }
        );
        return res.status(200).json({
          product: newProduct,
          message: "Product Updated Successfully"
        });
      } else {
        return res.status(404).json({ message: "Invalid Product ID" });
      }
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
      const product = await Product.findById(req.params.productId);
      if (product) {
        if (product.course) {
          await Course.findByIdAndDelete(product.course._id);
        } else if (product.test) {
          await Test.findByIdAndDelete(product.test._id);
        } else {
          // Delete book from firebase first
          const book = await Book.findOne(product.book._id);
          if (book) {
            const file = book.file;
            await bucket.file(file).delete();
          }
          await Book.findByIdAndDelete(product.book._id);
        }
        await Product.findByIdAndDelete(req.params.productId);
        return res.status(200).json({
          message: "Successfully Deleted"
        });
      } else {
        return res.status(404).json({ message: "Invalid Product ID" });
      }
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
  },

  async getNumberOfCustomers(
    _: express.Request,
    res: express.Response
  ): Promise<express.Response | void> {
    try {
      const count = await User.countDocuments({}).lean();
      return res.status(200).json({
        count
      });
    } catch (err) {
      return res.status(500).json({
        message: err.message
      });
    }
  }
};

export = AdminController;
