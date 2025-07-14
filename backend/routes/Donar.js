const express = require("express");
const router = express.Router();
const {createDonar}= require("../controller/Donar");

router.post("/create", createDonar);

module.exports = router;