const { Router } = require("express");
const { getCart } = require("../controllers/carts.controller");

const router = Router();

router.get("/", getCart);

module.exports = router;