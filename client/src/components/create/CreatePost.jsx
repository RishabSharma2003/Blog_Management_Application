import { AddCircleIcon as Add } from '@mui/icons-material/AddCircle';
import { Box, FormControl, styled } from '@mui/material';
import React from 'react';

const CreatePost = () => {
  return (
    <Container>
      <Image src='https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'/>

      <FormControl>
          <label htmlFor='fileInput'><Add fontSize='large' color='action'/></label>
          <input type='file' id='fileInput' style={{display:'none'}}/>
      </FormControl>
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

export default CreatePost
