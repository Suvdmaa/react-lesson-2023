const Product = require("../models/Product");

exports.createProducts = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.json({ status: true, product });
  } catch (error) {
    res.json({ status: false, error });
  }
};
