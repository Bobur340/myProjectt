import { Order } from "../models/order.model";

export const ucSelect = async (ctx, pubgId: string) => {
  try {
    const amount = Number(ctx.callbackQuery.data.replace("uc_", ""));

    // Bazaga yozamiz
    await Order.create({
      userId: ctx.from.id,
      pubgId,
      ucAmount: amount,
      status: "pending"
    });

    await ctx.reply(
      `✅ Buyurtma qabul qilindi!\n\n` +
      `🆔 PUBG ID: ${pubgId}\n` +
      `💳 UC: ${amount}\n` +
      `📦 Status: Kutilmoqda\n\n` +
      `💰 To‘lov uchun karta:\n\n` +
      `💳 *8600 xxxx xxxx xxxx*\n\n` +
      `To‘lovni qilganingizdan keyin *CHEK* yuboring.`,
      { parse_mode: "Markdown" }
    );

    await ctx.answerCallbackQuery();

  } catch (err) {
    console.log("UC SELECT ERROR:", err);
    ctx.reply("Xatolik yuz berdi, qayta urinib ko‘ring.");
  }
};
