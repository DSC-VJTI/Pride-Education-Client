import { Document } from "mongoose";
import IBook from "./IBook";
import ICourse from "./ICourse";
import ITest from "./ITest";

export default interface IProduct extends Document {
  name: string;
  price: number;
  discount: number;
  course: ICourse["_id"];
  test: ITest["_id"];
  book: IBook["_id"];
  imageUrl: string;
}
