import { Document } from "mongoose";

export default interface IProduct extends Document {
    name: string;
    type: string;
    price: number;
    discount: number;
    courseDetails: {
        level: string;
        subject: string;
        faculty: string;
        subtype: string;
        date: Date;
        language: string;
        duration: number;
        validity: number;
        mode: string;
    }
};