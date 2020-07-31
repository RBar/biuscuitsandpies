const ProductModel = require("../models/Product_model");
const { validationResult } = require("express-validator");

exports.updateProduct = async (request, response) => {
  if (request.params.id.length !== 24) {
    return response.status(400).json({ message: "Id no valido" });
  }
  //check for errors in express validator
  const errors = validationResult(request);
  if (!errors.isEmpty()) {
    return response.status(400).json({ errors: errors.array() });
  }
  //destructurate the product information
  const newProduct = request.body;
  try {
    let product = await ProductModel.findById(request.params.id);
    if (!product) {
      return response.status(404).json({ message: "Producto no encontrado" });
    }
    product = await ProductModel.updateOne(
      { _id: request.params.id },
      { $set: newProduct },
      { new: true }
    );
    response.json({ message: "Producto actualizado" });
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: "Server Error" });
  }
};
