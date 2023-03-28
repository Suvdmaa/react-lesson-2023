const User = require("../models/User");
const ShippingAddress = require("../models/shippingAddress");
const Product = require("../models/Product");

exports.createTransaction = async (req, res) => {
  try {
    const session = await User.startSession();
    session.startTransaction();
    const product = await Product.updateOne(
      {
        _id: "642251ba371030fb0684cb9f",
      },
      {
        $inc: { quantity: -2 },
      },
      { session }
    );
    const user = await User.create(req.body.user, { session });
    const shippingAddress = await ShippingAddress.create(
      req.body.shippingAddress,
      { session }
    );
    await session.commitTransaction();
    session.endSession();
    res.json({ status: true, user, shippingAddress, product });
  } catch (error) {
    res.json({ status: false, error });
  }
};

exports.createTransactionWithOutSession = async (req, res) => {
  try {
    const product = await Product.updateOne(
      {
        _id: "642251ba371030fb0684cb9f",
      },
      {
        $inc: { quantity: -2 },
      }
    );
    const user = await User.create(req.body.user);
    const shippingAddress = await ShippingAddress.create({
      address: req.body.shippingAddress,
      user_id: user._id,
    });
    res.json({ status: true, user, shippingAddress, product });
  } catch (error) {
    res.json({ status: false, error });
  }
};
