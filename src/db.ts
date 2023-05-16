import mongoose from "mongoose";

const connectToDatabase = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI)
        console.log("Mongoose DB Connected")       
    } catch (error) {
        console.log("error in connectionToDatabase", error); 
        throw error       
    }
};

export default connectToDatabase;