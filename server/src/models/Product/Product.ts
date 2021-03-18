import { model, Schema } from "mongoose";
import IProduct from "./IProduct";

const ProductSchema: Schema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  discount: { type: Number, required: true },
  courseDetails: {
    level: { type: String },
    subject: { type: String },
    faculty: { type: String },
    type: { type: String },
    date: { type: Date, default: Date.now, required: true },
    language: { type: String },
    duration: { type: Number },
    validity: { type: Number },
    mode: { type: String },
    applicableExamDate: { type: Date, required: true, default: Date.now },
    sysReq: { type: String },
    views: { type: Number, required: true, default: 0 }
  },
  testDetails: {
    subject: { type: String },
    contents: { type: String }
  },
  bookDetails: {
    url: { type: String }
  }
});

export default model<IProduct>("Product", ProductSchema);
