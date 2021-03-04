import crypto from "crypto";
import dotenv from "dotenv";

dotenv.config();
const email_key = process.env.EMAIL_KEY || "";

const OTPUtil = {
  generateOtpHash(email: string) {
    const otp = Math.floor(100000 + Math.random() * 900000);
    const ttl = 5 * 60 * 1000;
    const expires = Date.now() + ttl;
    const data = `${email}.${otp}.${expires}`;
    const hash = crypto
      .createHmac("sha256", email_key.toString())
      .update(data)
      .digest("hex");
    const fullHash = `${hash}.${expires}`;

    return [otp, fullHash];
  },

  verifyOTP(email: string, hash: string, otp: string): any {
    const [hashValue, expires] = hash.split(".");

    const now = Date.now();
    if (now > parseInt(expires)) {
      return { code: 400, msg: "Timeout. Please try again" };
    }
    const data = `${email}.${otp}.${expires}`;
    const newCalculatedHash = crypto
      .createHmac("sha256", email_key)
      .update(data)
      .digest("hex");
    if (newCalculatedHash === hashValue) {
      return { code: 200, msg: "OTP verified" };
    } else {
      console.log("not authenticated");
      return { code: 401, msg: "Incorrect OTP" };
    }
  }
};

export = OTPUtil;
