import { Order } from "../models/order.model";

export const adminCheckOrders = async (ctx) => {
  const orders = await Order.find({ status: "pending" });

  if (orders.length === 0) {
    return ctx.reply("Hozircha buyurtma yo‘q.");
  }

  let msg = "Yangi buyurtmalar:\n\n";

  orders.forEach((o, i) => {
    msg += `${i+1}) User: ${o.userId}\nPUBG ID: ${o.pubgId}\nUC: ${o.ucAmount}\n-------\n`;
  });

  ctx.reply(msg);
};
