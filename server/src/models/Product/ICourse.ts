import { Document } from "mongoose";
import IUser from "../User/IUser";

export default interface ICourse extends Document {
  level: string;
  subject: string;
  faculty: string;
  type: string;
  applicableExamDate: Date;
  language: string;
  duration: number;
  sysReq: string;
  views: number;
  validity: number;
  mode: string;
  courseUsers: Array<IUser["_id"]>;
}
