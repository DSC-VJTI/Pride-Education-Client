import { Document } from "mongoose";

export default interface IBook extends Document {
  url: string;
}
