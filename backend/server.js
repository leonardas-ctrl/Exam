import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './router.js';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 4000;
const MONGO_URL = process.env.MONGO_URL;

const app = express();
app.use(express.json());
app.use(cors());
app.use(router);

mongoose.connect(MONGO_URL).then(()=> {console.log('Connected to MongoDB')}).catch((err) => console.log(err));


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

