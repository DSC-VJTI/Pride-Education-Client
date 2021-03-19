import { Document } from "mongoose";
import IBook from "./IBook";
import ICourse from "./ICourse";
import ITest from "./ITest";

export default interface IProduct extends Document {
  name: string;
  price: number;
  discount: number;
  courses: Array<ICourse["_id"]>;
  tests: Array<ITest["_id"]>;
  books: Array<IBook["_id"]>;
}
