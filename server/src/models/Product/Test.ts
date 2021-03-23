import { model, Schema } from "mongoose";
import ITest from "./ITest";

const TestSchema: Schema = new Schema({
  subject: { type: String, required: true },
  contents: { type: String, required: true }
});

export default model<ITest>("Test", TestSchema);
