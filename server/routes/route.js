import express from 'express'
import {loginUser,signupUser } from '../controller/user-controller.js'

import { uploadImage } from '../controller/image-controller.js';
import upload from '../photos/upload.js';
import { createPost,getALLPost,getPost,updatePost,deletePost } from '../controller/post-controller.js';
import { authenticateToken } from '../controller/jwt-controller.js';
import { newComment,getComments,deleteComment } from '../controller/comment-controller.js';

const router=express.Router()
router.post('/signup',signupUser);
router.post('/login',loginUser);

router.post('/file/upload',upload.single('file'),uploadImage);

router.post('/create',authenticateToken,createPost);
router.get('/posts',authenticateToken,getALLPost);
router.get('/post/:id',authenticateToken,getPost);
router.put('/update/:id',authenticateToken,updatePost);
router.delete('/delete/:id',authenticateToken,deletePost);

router.post('/comment/new', authenticateToken, newComment);
router.get('/comments/:id' , authenticateToken, getComments);
router.delete('/comment/delete/:id' , authenticateToken, deleteComment);


export default router