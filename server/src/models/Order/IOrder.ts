import { Document } from "mongoose";
import IProduct from "../Product/IProduct";
import IUser from "../User/IUser";

export default interface IOrder extends Document {
  user: IUser["_id"];
  products: Array<IProduct["_id"]>;
  total: number;
  address: string;
  coupon: string;
  orderPlacedAt: Date;
}
