import { Document } from "mongoose";
import IOrder from "../Order/IOrder";
export default interface IUser extends Document {
  name: string;
  email: string;
  mobileNumber: number;
  address: string;
  field: string;
  level: string;
  reference: string;
  isAdmin: boolean;
  transactions: Array<IOrder["_id"]>;
}
