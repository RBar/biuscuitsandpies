const FlavorModel = require("../models/Flavor_model");
const ProductModel = require("../models/Product_model");
exports.getProductsFlavors = async (request, response) => {
  try {
    const flavors = await FlavorModel.find().sort({
      created_at: -1,
    });
    response.json({ flavors });
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: "Server Error" });
  }
};

exports.getProductsOfFlavor = async (request, response) => {
  try {
    const products = await ProductModel.find({
      flavor: request.params.flavor,
    }).sort({
      created_at: -1,
    });
    response.json({ products });
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: "Server Error" });
  }
};
