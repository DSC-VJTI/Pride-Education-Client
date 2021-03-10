import { model, Schema } from "mongoose";
import IUser from "./IUser";

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  mobileNumber: { type: Number, required: true, unique: true },
  address: { type: String, required: true },
  field: { type: String },
  level: { type: String },
  reference: { type: String }
});

export default model<IUser>("User", UserSchema);
