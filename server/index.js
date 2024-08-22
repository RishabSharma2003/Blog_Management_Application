import express from 'express';
import dotenv from 'dotenv'
import connection from './db/db.js';

const app=express();
dotenv.config()

const PORT=8000;
app.listen(PORT,()=>{console.log(`server is running on ${PORT}`)})

//establishing database connection
connection(process.env.DB_USERNAME,process.env.DB_PASSWORD)