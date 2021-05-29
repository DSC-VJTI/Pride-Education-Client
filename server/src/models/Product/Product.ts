import { model, Schema } from "mongoose";
import IProduct from "./IProduct";

const ProductSchema: Schema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  discount: { type: Number, required: true },
  course: {
    type: Schema.Types.ObjectId,
    ref: "Course"
  },
  test: {
    type: Schema.Types.ObjectId,
    ref: "Test"
  },
  book: {
    type: Schema.Types.ObjectId,
    ref: "Book"
  },
  imageUrl: { type: String, required: false }
});

export default model<IProduct>("Product", ProductSchema);
