import { model, Schema } from "mongoose";
import IOrder from "./IOrder";

const OrderSchema: Schema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
  total: { type: Number, default: 0, required: true },
  address: { type: String, required: true },
  coupon: { type: String, required: true },
  orderPlacedAt: { type: Date, default: Date.now, required: true }
});

export default model<IOrder>("Order", OrderSchema);
