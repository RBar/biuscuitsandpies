const express = require("express");
const router = express.Router();
const getProductsofCategoryController = require("../controllers/category_products_controller");
//=====================================//
//           /api/category             //
//=====================================//

router.get("/:category", getProductsofCategoryController.getProductsofCategory);

module.exports = router;
