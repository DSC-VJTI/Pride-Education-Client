import { model, Schema } from "mongoose";
import IBook from "./IBook";

const BookSchema: Schema = new Schema({
  url: { type: String, required: true },
  file: { type: String }
});

export default model<IBook>("Book", BookSchema);
