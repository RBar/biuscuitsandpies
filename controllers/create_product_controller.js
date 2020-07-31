const ProductModel = require("../models/Product_model");
const FlavorModel = require("../models/Flavor_model");
const { validationResult } = require("express-validator");
exports.createProduct = async (request, response) => {
  //check for errors in express validator
  const errors = validationResult(request);
  if (!errors.isEmpty()) {
    return response.status(400).json({ errors: errors.array() });
  }
  try {
    //create new product
    const product = new ProductModel(request.body);
    product.save();
    //create flavor
    if (request.body.flavor !== []) {
      request.body.flavor.map(async (flavor) => {
        const flavorExist = await FlavorModel.findOne({ name: flavor });
        if (!flavorExist) {
          const newFlavor = new FlavorModel({ name: flavor });
          newFlavor.save();
        }
      });
    }
    response.json(product);
    //
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: "Server Error" });
  }
};
