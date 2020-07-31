const ProductModel = require("../models/Product_model");

exports.deleteProduct = async (request, response) => {
  try {
    if (request.params.id.length !== 24) {
      return response.status(400).json({ message: "Id no valido" });
    }
    let product = await ProductModel.findById(request.params.id);
    if (!product) {
      return response.status(404).json({ message: "Producto no encontrado" });
    }
    await ProductModel.deleteOne({ _id: request.params.id });
    response.json({ message: "Producto eliminado" });
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: "Server Error" });
  }
};
