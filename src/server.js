"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
require("dotenv/config");
var grammy_1 = require("grammy");
exports.default = bot_1.default;
var bot_1 = __importDefault(require("./bot"));
var app = (0, express_1.default)();
app.use(express_1.default.json());
// Webhook URL
app.use("/webhook", (0, grammy_1.webhookCallback)(bot_1.default, "express"));
app.get("/", function (req, res) {
    res.send("Bot ishlayapti!");
});
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log("Server ishga tushdi → PORT:", PORT);
});
