import { Box , Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { API } from '../../service/api';



const DetailView = () => { 

    comst [post, setPost] = useState({});

    const {id} = useParams();

    const url = post.picture ? post.picture : '';

    useEffect(() => {
        const fetchData = async() =>{

        }
        fetchData();
    },[])

    return(
        <Box>
            <img src ={url} alt="blog" />
        </Box>
    )
}

export default DetailView;