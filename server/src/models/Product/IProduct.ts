import { Document } from "mongoose";

export default interface IProduct extends Document {
  name: string;
  price: number;
  discount: number;
  courseDetails: {
    level: string;
    subject: string;
    faculty: string;
    type: string;
    date: Date;
    language: string;
    duration: number;
    validity: number;
    mode: string;
    applicableExamDate: Date;
    sysReq: string;
    views: number;
  };
  testDetails: {
    subject: string;
    contents: string;
  };
  bookDetails: {
    url: string;
  };
}
