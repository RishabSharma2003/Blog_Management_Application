import React, { useEffect, useState } from 'react'
import { API } from '../../../service/api'
import { useSearchParams } from 'react-router-dom'
import Post from './Post'

const Posts = () => {
    const[posts,setPosts]=useState([])
    const[searchParams]=useSearchParams()
    const category=searchParams.get('category')
    console.log('category')
    console.log(category)
    console.log(category)

    useEffect(()=>{
        const fetchData=async()=>{
            const response=await API.getAllPost({category});
            console.log(response)
            
            if(response.isSuccess){
                setPosts(response.data)
            }
        }
        fetchData()
    },[category])
  return (
    <>
        {
            posts&&posts.length>0?posts.map(post=>(
                <Post post={post}/>
            )):
            <div></div>
        }
      
    </>
  )
}

export default Posts
