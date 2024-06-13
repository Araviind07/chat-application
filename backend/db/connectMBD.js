import mongoose from "mongoose";

const connectTomongoDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("connected to MongoDB");
        
    } catch (error) {
        console.log("Error connect to Mongo DB", error.message);
    }
};

export default connectTomongoDB;