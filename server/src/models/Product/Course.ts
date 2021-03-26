import { model, Schema } from "mongoose";
import ICourse from "./ICourse";

const CourseSchema: Schema = new Schema({
  level: { type: String, required: true },
  subject: { type: String, required: true },
  faculty: { type: String, required: true },
  type: { type: String, required: true },
  applicableExamDate: { type: Date, required: true, default: Date.now },
  duration: { type: Number, required: true },
  language: { type: String, required: true },
  sysReq: { type: String, required: true },
  views: { type: Number, required: true },
  validity: { type: Number, required: true },
  mode: { type: String, required: true }
});

export default model<ICourse>("Course", CourseSchema);
