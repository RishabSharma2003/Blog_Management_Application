import express from 'express';
import dotenv from 'dotenv'
import connection from './db/db.js';
import router from './routes/route.js';
import cors from 'cors';

const app=express();
dotenv.config()

app.use(express.json());
app.use(cors())
app.use('/',router)

const PORT=8000;
app.listen(PORT,()=>{console.log(`server is running on ${PORT}`)})

//establishing database connection
connection(process.env.DB_USERNAME,process.env.DB_PASSWORD)