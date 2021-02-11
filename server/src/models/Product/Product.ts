import { model, Schema } from "mongoose";
import IProduct from "./IProduct";

const ProductSchema: Schema = new Schema({
    name: { type: String, required: true },
    type: { type: String, required: true},
    price: { type: Number, required: true },
    discount: { type: Number, required: true},
    courseDetails: {
        level: { type: String, required: true},
        subject: { type: String, required: true },
        faculty: { type: String, required: true },
        subtype: { type: String, required: true },
        date: { type: Date, required: true },
        language: { type: String, required: true },
        duration: { type: Number, required: true },
        validity: { type: Number, required: true },
        mode: { type: String, required: true }
    }
});

export default model<IProduct>("Product", ProductSchema);