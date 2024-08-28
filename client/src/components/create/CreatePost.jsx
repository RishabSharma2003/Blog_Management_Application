import { useEffect, useState, useContext } from 'react';
import { Box, FormControl, styled, InputBase ,Button, TextareaAutosize} from '@mui/material';
import  AddCircle from '@mui/icons-material/AddCircle';
import React from 'react'
import { useLocation } from 'react-router-dom';
import { DataContext } from '../../context/DataProvider';
import {API} from '../../service/api.js';

const CreatePost = () => {

  const [post, setPost] = useState(initialPost);
  const [file, setFile] = useState('');
  
  //console.log(file)

  const {account} = useContext(DataContext);

  const location = useLocation();

  const url = post.picture ? post.picture :'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';

    useEffect(() =>{
      const getImage = async () =>{
        console.log(file)
        if (file) {
          const data =new FormData();
          data.append("name", file.name);
          data.append("file", file);
          for (let [key, value] of data.entries()) {
            console.log(`${key}:`, value);
          }

          //API call
          const response = await API.uploadFile(data);
          console.log(response.data)
          post.picture = response.data

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
      <Image src={url} alt="banner"/>

      <StyledFormControl>
          <label htmlFor='fileInput'><AddCircle fontSize='large' color='action'/></label>
          <input type='file' id='fileInput' style={{display:'none'}} 
            onChange={(e) => {
              const selectedFile = e.target.files[0];
              console.log("selectedFile");
              console.log(selectedFile); // Logs the selected file directly
              setFile(selectedFile);
            }}
          />
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
