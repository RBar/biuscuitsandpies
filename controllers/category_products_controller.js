const ProductModel = require("../models/Product_model");

exports.getProductsofCategory = async (request, response) => {
  try {
    const products = await ProductModel.find({
      category: request.params.category,
    }).sort({
      created_at: -1,
    });
    response.json({ products });
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: "Server Error" });
  }
};
