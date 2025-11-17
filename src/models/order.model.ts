import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: Number,
  pubgId: String,
  ucAmount: Number,
  status: {
    type: String,
    default: "pending"   // pending, done
  },
  date: {
    type: Date,
    default: Date.now
  }
});

export const Order = mongoose.model("Order", orderSchema);
