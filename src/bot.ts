import { Bot } from "grammy";

const bot = new Bot(process.env.BOT_TOKEN!);

// Oddiy javob
bot.command("start", (ctx) => {
  ctx.reply("Assalomu alaykum! Bot ishlayapti 🚀");
});

bot.on("message", (ctx) => {
  ctx.reply("Xabaringiz qabul qilindi 👍");
});

export { bot };
