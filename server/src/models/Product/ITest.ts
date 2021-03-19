import { Document } from "mongoose";

export default interface ITest extends Document {
  subject: string;
  contents: string;
}
