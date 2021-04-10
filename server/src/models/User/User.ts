import { model, Schema } from "mongoose";
import IUser from "./IUser";

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  mobileNumber: { type: Number, required: true, unique: true },
  address: { type: String, required: true },
  field: { type: String },
  level: { type: String },
  reference: { type: String },
  isAdmin: { type: Boolean, required: true, default: false },
  transactions: [
    {
      amount: Number,
      orderId: {
        type: Schema.Types.ObjectId,
        ref: "Order"
      },
      transactionId: String,
      time: {
        type: Date
      }
    }
  ]
});

export default model<IUser>("User", UserSchema);
