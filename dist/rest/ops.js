"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const otherRouter = express_1.Router();
exports.otherRouter = otherRouter;
function encryptEnv() {
    const cipherText = {};
    return cipherText.toString();
}
function getRoute(req, res) {
    res.json({ status: 'completed' });
}
otherRouter.get('/test', getRoute);
