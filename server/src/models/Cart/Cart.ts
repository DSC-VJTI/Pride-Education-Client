import { model, Schema } from "mongoose";
import ICart from "./ICart";

const CartSchema: Schema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  products: [{ type: Schema.Types.ObjectId, ref: "Product" }]
});

export default model<ICart>("Cart", CartSchema);
