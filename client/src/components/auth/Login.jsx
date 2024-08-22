import React from 'react'
import {Box, TextField, Button, styled} from '@mui/material'


const Component=styled(Box)`
    width:400px;
    margin:auto;
    box-shadow:5px 2px 5px 2px rgba(0 0 0/0.6);
`

const Image=styled('img')({
    width:100
})

const Login = () => {
  return (
    <Component>
        <Image src="https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png" alt="" />
        <TextField id="standard-basic" label="Email" variant="standard" />
        <TextField id="standard-basic" label="Password" variant="standard" />
        <Button variant="contained">Login</Button>
        <Button variant="Outlined">Create an account</Button>
    </Component>
  )
}

export default Login
