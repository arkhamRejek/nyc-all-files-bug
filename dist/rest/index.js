"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const something_1 = require("./something");
const routes = express_1.Router();
exports.routes = routes;
routes.use('/ok', something_1.someRouter);
