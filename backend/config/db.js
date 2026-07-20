import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://fullstackdatabase:payal1234@cluster0.svzg2ws.mongodb.net/?appName=Cluster0");

        console.log("MongoDB Connected Successfully");
    } catch (error) {
        console.log("Database Error:", error.message);
        process.exit(1);
    }
};

export default connectDB;