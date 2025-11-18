import express from "express";
import bot from "./bot";
import { webhookCallback } from "grammy";

const app = express();

app.use(express.json());
app.use("/webhook", webhookCallback(bot, "express"));

app.listen(process.env.PORT || 3000, () => {
  console.log("Server ishladi");
});
