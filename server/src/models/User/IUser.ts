import { Document } from "mongoose";

export default interface IUser extends Document {
  name: string;
  email: string;
  mobileNumber: number;
  address: string;
  field: string;
  level: string;
  reference: string;
  isAdmin: boolean;
}
