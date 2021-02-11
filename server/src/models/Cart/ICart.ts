import { Document } from "mongoose";
import IProduct from "../Product/IProduct";
import IUser from "../User/IUser"

export default interface ICart extends Document {
    user: IUser['_id'];
    product: Array<IProduct['_id']>;
};