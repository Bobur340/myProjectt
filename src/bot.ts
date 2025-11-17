import { Bot } from "grammy";
import { tempDB } from "./tempDB";
import { ucMenu } from "./keyboards/ucMenu";
import { ucSelect } from "./handlers/ucSelect";

const bot = new Bot(process.env.BOT_TOKEN!);

bot.command("start", async (ctx) => {
  await ctx.reply("PUBG ID kiriting:");
});

bot.on("message:text", async (ctx) => {
  const userId = ctx.from!.id;

  tempDB[userId] = {
    pubg_id: ctx.message.text
  };

  await ctx.reply("UC paketni tanlang:", {
    reply_markup: ucMenu
  });
});

bot.callbackQuery(/uc_/, async (ctx) => {
  const userId = ctx.from!.id;
  const userData = tempDB[userId];

  if (!userData?.pubg_id) {
    return ctx.reply("PUBG ID aniqlanmadi. /start bosing.");
  }

  await ucSelect(ctx, userData.pubg_id);
});

export default bot;
