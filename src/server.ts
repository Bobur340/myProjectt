import express from "express";
import "dotenv/config";
import { webhookCallback } from "grammy";
import { bot } from "./bot.js";

const app = express();
app.use(express.json());

// Webhook URL
app.use("/webhook", webhookCallback(bot, "express"));

app.get("/", (req, res) => {
  res.send("Bot ishlayapti!");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server ishga tushdi → PORT:", PORT);
});
