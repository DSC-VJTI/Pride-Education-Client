import { Document } from "mongoose";

export default interface IQuery extends Document {
  mobileNumber: number;
  email: string;
  description: string;
  solved: boolean;
  type: string;
}
