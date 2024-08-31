import {useEffect, useState } from "react";
import { API } from "../../../service/api";
import { Box, Grid } from "@mui/material";
import Post from "./Post";
import { useSearchParams } from "react-router-dom";

const Posts = () =>{

    const [posts, setPosts] = useState([]);

    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');

    useEffect(() =>{
        const fetchData = async () =>{
            let response = await API.getAllPost({category : category || ''});
            console.log(response)
            if(response.isSuccess){
                setPosts(response.data);
            }
        }
        fetchData();
    },[category])

    return(
        <>
            {
                posts && posts.length>0 ? posts.map(post =>(
                    <Grid item lg={3} sm={4} xs={12}>
                        <Post post={post}/>
                    </Grid>
                )): <Box style={{color:'#878787', margin:'30px 80px' , fontSize: 18 }}></Box>
            }
        </>
    )
}

export default Posts;
