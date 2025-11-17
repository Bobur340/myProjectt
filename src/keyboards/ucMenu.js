"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ucMenu = void 0;
var grammy_1 = require("grammy");
exports.ucMenu = new grammy_1.InlineKeyboard()
    .text("60 UC — 8000", "uc_60").row()
    .text("325 UC — 32000", "uc_325").row()
    .text("825 UC — 70000", "uc_825");
