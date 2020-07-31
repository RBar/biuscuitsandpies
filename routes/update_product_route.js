const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const updateProductController = require("../controllers/update_product_controller");

//=====================================//
//           /api/updateproducts       //
//=====================================//

router.put(
  "/:id",
  [
    check("name", "El nombre del producto es obligatorio").not().isEmpty(),
    check("image", "La imagen es obligatoria").not().isEmpty(),
    check("price", "El precio del producto es obligatorio").not().isEmpty(),
    check("category", "El producto debe tener al menos una categoria")
      .not()
      .isEmpty(),
    check("description", "La descripcion del producto es obligatorio")
      .not()
      .isEmpty(),
    check("flavor", "El producto deber tener al menos un sabor")
      .not()
      .isEmpty(),
  ],
  updateProductController.updateProduct
);

module.exports = router;
