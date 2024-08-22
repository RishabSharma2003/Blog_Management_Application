import React from 'react'
import {Box, TextField, Button, styled} from '@mui/material'

const Login = () => {
  return (
    <Component>
      <Box>
        <Image src="https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png" alt="" />
        <Wrappper>
          <TextField id="standard-basic" label="Email" variant="standard" />
          <TextField id="standard-basic" label="Password" variant="standard" />
          <Button variant="contained">Login</Button>
          <Button variant="Outlined">Create an account</Button>
        </Wrappper>
      </Box>

    </Component>
  )
}

export default Login



//for image
const Image=styled('img')({
  width:100,
  margin:'auto',
  display:'flex',
  padding:'50px 0 0'
})
//for outer layout
const Component=styled(Box)`
  width:400px;
  margin:auto;
  box-shadow:5px 2px 5px 2px rgba(0 0 0/0.6);
`// for image and textField layout
const Wrappper=styled(Box)`
  padding:25px 35px;
  display:flex;
  flex-direction:column;
  flex:1;
  &>div,&button{
    margin-top:20px
  }
`

