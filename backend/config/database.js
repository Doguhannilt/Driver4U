import mongoose from 'mongoose';
import dotenv from 'dotenv';

// .env dosyasını yükle
dotenv.config();

const connectDB = async () => {
    try {
        // Create connection
        const mongoURI = process.env.MONGO_DB_CONNECTION

        // Check if mongoURI is set
        if (!mongoURI) {
            console.error('MONGO_URI environment variable is not set');
            process.exit(1);
        }

        // Mongoose connection
        await mongoose.connect(mongoURI);

        // Successfully connected to the database
        console.log(`Successfully connected to the database`);
    } catch (err) {
        console.error("Database Error", err);
        process.exit(1);
    }
}

export default connectDB;