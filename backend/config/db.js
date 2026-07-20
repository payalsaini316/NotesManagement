import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/notesdb");

        console.log("MongoDB Connected Successfully");
    } catch (error) {
        console.log("Database Error:", error.message);
        process.exit(1);
    }
};

export default connectDB;