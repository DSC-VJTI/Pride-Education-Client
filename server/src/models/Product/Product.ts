import { model, Schema } from "mongoose";
import IProduct from "./IProduct";

const ProductSchema: Schema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  discount: { type: Number, required: true },
  courses: [
    {
      type: Schema.Types.ObjectId,
      ref: "Course"
    }
  ],
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product"
    }
  ],
  books: [
    {
      type: Schema.Types.ObjectId,
      ref: "Book"
    }
  ],
  testDetails: {
    subject: { type: String },
    contents: { type: String }
  },
  bookDetails: {
    url: { type: String }
  }
});

export default model<IProduct>("Product", ProductSchema);
