import express from 'express'
import {loginUser,signupUser } from '../controller/user-controller.js'
import { uploadImage } from '../controller/image-controller.js';
import upload from '../photos/upload.js';

const router=express.Router()
router.post('/signup',signupUser);
router.post('/login',loginUser);

router.post('/file/upload',upload.single('file'),uploadImage);



export default router