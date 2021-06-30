import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import authRouter from './routes/api/auth.js';

import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/auth', authRouter);

mongoose
  .connect(
    `mongodb+srv://pearl24:Samhiba24@cluster0.qrlyk.mongodb.net/pearl?retryWrites=true&w=majority`,
    {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log('>> Connected to database <<'))
  .catch((err) => console.log(err.message));

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
