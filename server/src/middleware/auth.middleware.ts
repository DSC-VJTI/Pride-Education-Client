import User from "./../models/User/User";
import OTPUtil from "./../utility/otp";

const auth = {
  async userExists(req, res, next) {
    const email = req.body.email;

    const user1 = await User.findOne({ email: email }).lean();
    console.log(user1);
    if (user1) {
      res.status(422).json({
        error: "Email already exists"
      });
    } else {
      next();
    }
  },
  async verifyOTP(req, res, next) {
    const response = OTPUtil.verifyOTP(
      req.body.email,
      req.body.hash,
      req.body.otp
    );
    if (response.code !== 200) {
      res.status(response.code).json({
        error: response.msg
      });
    }
    delete req.body.hash;
    delete req.body.otp;
    next();
  }
};

export = auth;
