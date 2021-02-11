import { Document } from "mongoose";

export default interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    mobileNumber: string;
    address: string;
    field: string;
    level: string;
    reference: string;
};