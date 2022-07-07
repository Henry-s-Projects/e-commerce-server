import mongoose from "mongoose";

const ConnectMongoDB = async () => {
  console.log(process.env.MONGODB_URL);
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("MongoDB connected");
  } catch (error) {
    console.log("Connect to MongoDB error: ", error);
  }
};

export default ConnectMongoDB;
