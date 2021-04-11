import { model, Schema } from "mongoose";
import IQuery from "./IQuery";

const QuerySchema: Schema = new Schema({
  mobileNumber: { type: Number, required: true },
  email: { type: String, required: true },
  description: { type: String, required: true },
  solved: { type: Boolean, required: true, default: false },
  type: { type: String, required: true }
});

export default model<IQuery>("Query", QuerySchema);
