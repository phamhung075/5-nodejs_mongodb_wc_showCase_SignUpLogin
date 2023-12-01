"use strict";

const express = require("express");
const { asyncHandler } = require("../../auth/checkAuth");
const accessController = require("../../controllers/access.controller");
const router = express.Router();

//signUp
router.post("/shop/signup", asyncHandler(accessController.signUp)); //catch những handle lỗi thrown ra
router.post("/shop/login", asyncHandler(accessController.login)); //catch những handle lỗi thrown ra

module.exports = router;
