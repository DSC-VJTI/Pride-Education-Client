import { model, Schema } from "mongoose";
import IUser from "./IUser";

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  address: { type: String, required: true },
  field: { type: String, required: true },
  level: { type: String, required: true },
  reference: { type: String, required: true },
});

export default model<IUser>("User", UserSchema);
