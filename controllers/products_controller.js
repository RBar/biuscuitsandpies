const ProductModel = require("../models/Product_model");

exports.getAllProducts = async (request, response) => {
  try {
    const products = await ProductModel.find().sort({
      created_at: -1,
    });
    response.json({ products });
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: "Server Error" });
  }
};
