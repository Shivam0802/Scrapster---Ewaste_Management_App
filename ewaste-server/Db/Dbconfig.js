import mongoose from "mongoose";

async function dbconnect() {
    try {
        await mongoose.connect("mongodb+srv://admin:admin@scrapster.xf6la.mongodb.net/scrapster?retryWrites=true&w=majority&appName=Scrapster");
        console.log("Database connected");
    } catch (error) {
        console.log("Error connecting to database");
        process.exit(1);
    }
};

export default dbconnect;