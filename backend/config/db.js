import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb://notesadmin:saini12345@ac-xq7ddb7-shard-00-00.svzg2ws.mongodb.net:27017,ac-xq7ddb7-shard-00-01.svzg2ws.mongodb.net:27017,ac-xq7ddb7-shard-00-02.svzg2ws.mongodb.net:27017/?ssl=true&replicaSet=atlas-f3pa8c-shard-0&authSource=admin&appName=Cluster0"
    );

    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error("Database Error:", error);
  }
};

export default connectDB;