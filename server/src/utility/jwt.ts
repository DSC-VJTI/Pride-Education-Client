import jwt from "jsonwebtoken";
import IUser from "src/models/User/IUser";
const JWT_AUTH_TOKEN = process.env.JWT_AUTH_TOKEN || "DSC_IS_GREAT";

export interface IJWTResponse {
  success: boolean;
  jwtPayload?: IUser;
  error?: string;
}

const jwtHandler = {
  setJwt(user: IUser): string {
    const token = jwt.sign(
      {
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
          mobileNumber: user.mobileNumber
        }
      },
      JWT_AUTH_TOKEN,
      {
        expiresIn: "5h"
      }
    );
    return token;
  },

  verifyJWT(token: string): IJWTResponse {
    jwt.verify(token, JWT_AUTH_TOKEN, async (err, user) => {
      if (user) {
        return {
          success: true,
          jwtPayload: user
        };
      } else if (err && err.message === "TokenExpiredError") {
        return {
          success: false,
          error: "Access Token Expired"
        };
      } else {
        return {
          success: false,
          error: "User not authenticated"
        };
      }
    });
    return {
      success: false,
      error: "Panic: Undetectable state reached"
    };
  }
};

export default jwtHandler;
