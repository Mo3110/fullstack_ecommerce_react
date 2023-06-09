"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var order_1 = require("../controller/order");
var orderRoutes = express_1.default.Router();
orderRoutes.post("/", order_1.createOrder);
exports.default = orderRoutes;
//# sourceMappingURL=order.js.map