import {GridFsStorage}  from 'multer-gridfs-storage'
import dotenv from 'dotenv'
import multer from 'multer'

dotenv.config();
const username=process.env.DB_USERNAME
const password=process.env.DB_PASSWORD

const storage=new GridFsStorage({
    url:`mongodb+srv://${username}:${password}@cluster0.5s5n5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
    file:(req,file)=>{
        return{
            bucketName:"photos",
            filename:`${Date.now()}-blog-${file.originalname}`
        }
    }
})

export default multer({ storage });