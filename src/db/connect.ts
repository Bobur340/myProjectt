import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL as string);
    console.log("MongoDB ulandi!");
  } catch (err) {
    console.log("Mongo xato:", err);
  }
};
