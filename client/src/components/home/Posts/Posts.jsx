import React, { useEffect, useState } from 'react'
import { API } from '../../../service/api'
import { useSearchParams ,Link} from 'react-router-dom'
import Post from './Post'
import { Box , Grid} from '@mui/material';

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
                <Grid item lg={3} sm={4} xs={12}>
                    <Link to={`details/${post._id}`} style={{textDecoration:'none', color:'inherit'}}>  
                        <Post post={post}/>
                    </Link>
                </Grid>
            )):
            <Box style={{color:'#878787', margin:'30px 80px', fontsize:18}}></Box>
        }
      
    </>
  )
}

export default Posts;
