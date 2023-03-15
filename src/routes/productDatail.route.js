const { Router } = require("express");
const { getProductDetail } = require("../controllers/productDatail.controller");

const router = Router();

router.get("/", getProductDetail);

module.exports = router;