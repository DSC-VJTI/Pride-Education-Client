import User from "../models/User/User";
import Product from "../models/Product/Product";

export const newProduct = async (req, res, next) => {
  try {
    const product = await Product.create({ ...req.body });
    product.save().catch((err) => console.log("Error saving product ", err));
    return res.status(200).json({
      product
    });
  } catch (err) {
    return next({
      status: 400,
      message: err.message
    });
  }
};

export const editProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      upsert: true,
      new: true
    });
    product.save().catch((err) => console.log("Error updating product ", err));
    return res.status(200).json({
      message: "Product Updated Successfully"
    });
  } catch (err) {
    return next({
      status: 400,
      message: err.message
    });
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      message: "Successfully Deleted"
    });
  } catch (err) {
    return next({
      status: 400,
      message: err.message
    });
  }
};

export const allUsers = async (_req, res, next) => {
  try {
    const allUsers = await User.find({});
    return res.status(200).json({
      allUsers: allUsers.map((user) => {
        return user.toObject();
      })
    });
  } catch (err) {
    return next({
      status: 400,
      message: err.message
    });
  }
};
