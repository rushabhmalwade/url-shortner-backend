import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(process.env.DATABASE_URL);
    console.log(
      "Database connection succesful",
      connectionInstance.connection.host
    );
  } catch (error) {
    console.log("Database connection error", error);
  }
};

export default connectDB;
