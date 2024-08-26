import { useEffect, useState, useContext } from 'react';
import { Box, FormControl, styled, InputBase ,Button, TextareaAutosize} from '@mui/material';
import  AddCircle from '@mui/icons-material/AddCircle';
import React from 'react'
import { useLocation } from 'react-router-dom';
import { DataContext } from '../../context/DataProvider';
import {API} from '../../service/api.';

const CreatePost = () => {

  const [post, setPost] = useState(initialPost);
  const [file, setFile] = useState('');

  const {account} = useContext(DataContext);

  const location = useLocation();

    useEffect(() =>{
      const getImage = async () =>{
        if (file) {
          const data =new FormData();
          data.append("name", file.name);
          data.append("file", file);

          //API call
          await API.uploadFile(file);
          post.picture = ''

        }
      }
      getImage();
      post.categories = location.search?.split('=')[1] || 'All';
      post.username = account.username;
    },[file])

    const handlechange = (e) => {
      setPost({ ...post, [e.target.name]: e.target.value })
    }


  return (

    <Container>
      <Image src='https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80' alt="banner"/>

      <StyledFormControl>
          <label htmlFor='fileInput'><AddCircle fontSize='large' color='action'/></label>
          <input type='file' id='fileInput' style={{display:'none'}} onChange={(e) => setFile(e.target.files[0])}/>

          <InputTextField placeholder='title' name="title" onChange={(e) => handlechange(e)}/>
          <Button variant='contained'>Publish</Button>
      </StyledFormControl>

      <Textarea minRows={5} placeholder='Tell your story......' name="description" onChange={(e) => handlechange(e)}/>

    </Container>
  )
}

const Container = styled(Box)({
    margin: '50px 100px',
});

const Image = styled('img')({
    width: '100%',
    height: '50vh',
    objectFit: 'cover'
});

const StyledFormControl = styled(FormControl)`
    margin-top: 10px;
    display: flex;
    flex-direction:row;
`;

const InputTextField = styled(InputBase)`
    flex:1;
    margin:0 30px;
    font-size:25px;
`;

const Textarea = styled(TextareaAutosize)`
    width:100%;
    font-size:18px;
    border:none;
    &:focus-visible{ outline:none;}
    margin:15px;

`;

const initialPost = {
    title: '',
    description: '',
    picture: '',
    username: '',
    categories: '',
    createdDarte: new Date()

}

export default CreatePost
