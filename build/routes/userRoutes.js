"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const router = (0, express_1.Router)();
router.post('/', userController_1.createUser);
router.post('/login', userController_1.loginUser);
router.get('/', userController_1.getCurrentUser);
exports.default = router;
