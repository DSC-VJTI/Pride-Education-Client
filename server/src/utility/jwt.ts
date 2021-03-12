import jwt from "jsonwebtoken";
import IUser from "src/models/User/IUser";
const JWT_AUTH_TOKEN = process.env.JWT_AUTH_TOKEN || "DSC_IS_GREAT";

export interface IJWTResponse {
  success: boolean;
  /* eslint-disable-next-line */
  jwtPayload?: any;
  error?: string;
}

const jwtHandler = {
  setJwt(user: IUser, expiresIn: string | number = "5h"): string {
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
        expiresIn
      }
    );
    return token;
  },

  verifyJWT(token: string): IJWTResponse {
    try {
      const user = jwt.verify(token, JWT_AUTH_TOKEN);
      return {
        success: true,
        jwtPayload: user
      };
    } catch (error) {
      if (error instanceof jwt.TokenExpiredError) {
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
    }
  }
};

export default jwtHandler;
