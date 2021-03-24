import { model, Schema } from "mongoose";
import IBook from "./IBook";

const BookSchema: Schema = new Schema({
  url: { type: String, required: true }
});

export default model<IBook>("Book", BookSchema);
