import React from 'react'
import {Box, TextField, Button, styled,Typography} from '@mui/material'

const Login = () => {
  return (
    <Component>
      <Box>
        {/* image */}
        <Image src="https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png" alt="" />

        <Wrappper>
          {/* labels */}
          <TextField id="standard-basic" label="Email" variant="standard" />
          <TextField id="standard-basic" label="Password" variant="standard" />

          {/* buttons */}
          <LoginButton variant="contained">Login</LoginButton>
          <Text style={{textAlign:'center'}}>OR</Text>
          <SignUpButton variant="outlined">Create an account</SignUpButton>

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
  &>div,&>button,&>p{
    margin-top:20px
  }
`//login button styling
const LoginButton=styled(Button)`
  background:#FB641B;
  color:#fff;
  height:48px;
  border-radius:6px
`//sign up button styling
const SignUpButton=styled(Button)`
  background:#fff;
  color:#2874f0;
  height:48px;
  border-radius:2px;
  box-shadow:0 2px 4px 0 rgb(0 0 0/20%);
`//OR styling
const Text=styled(Typography)`
  font-size:14px;
  color:#878787;
`
