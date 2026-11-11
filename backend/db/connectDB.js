import mongoose from "mongoose";

export const connectDB = async () => {
    try {
      const connection = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Connected to MongoDB ${connection.connection.host}`)
        return connection;
    } catch (error) {
        console.log('U got Error silly! ' + error);
        throw error;
    }
}