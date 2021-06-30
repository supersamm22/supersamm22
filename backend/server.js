import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';


import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
 
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})
import users from '../backend/api/users'
app.use('api/users');

app.listen(port, () => { 
    console.log(`Server is running on port: ${port}`);
});  

 
