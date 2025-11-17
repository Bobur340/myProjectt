"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var orderSchema = new mongoose_1.default.Schema({
    userId: Number,
    pubgId: String,
    ucAmount: Number,
    status: {
        type: String,
        default: "pending" // pending, done
    },
    date: {
        type: Date,
        default: Date.now
    }
});
exports.Order = mongoose_1.default.model("Order", orderSchema);
