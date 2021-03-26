import { Document } from "mongoose";

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
}
