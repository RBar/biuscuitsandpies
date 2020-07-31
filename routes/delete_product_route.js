const express = require("express");
const router = express.Router();
const deleteProductController = require("../controllers/delete_product_controller");

//=====================================//
//           /api/deleteproducts       //
//=====================================//

router.delete("/:id", deleteProductController.deleteProduct);

module.exports = router;
