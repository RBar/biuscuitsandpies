const express = require("express");
const router = express.Router();
const flavorsController = require("../controllers/flavors_controller");
//=====================================//
//           /api/flavors              //
//=====================================//

router.get("/:flavor", flavorsController.getProductsOfFlavor);

module.exports = router;
