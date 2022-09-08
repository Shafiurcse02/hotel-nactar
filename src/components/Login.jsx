import React, { useState } from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';

const Login = () => {
    const [isSignUp, setIsSignUp] = useState(false)
    console.log(isSignUp);
    const [inputs, setinputs] = useState({
        name: "", email: "", pwd: "", phn: ""
    })

    const changHandler = (e) => {
        setinputs((preState) => ({
            ...preState,
            [e.target.name]: e.target.value
        }
        ));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Sub");
        console.log(inputs);
    }
    const resetData = (e) => {
        setIsSignUp(!isSignUp);
        setinputs({ name: "", email: "", pwd: "", phn: "" });

    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Box display="flex"
                    flexDirection={"column"}
                    maxWidth={400}
                    alignItems="center"
                    justifyContent={"center"}
                    margin="auto"
                    marginTop={2}
                    padding={3}
                    borderRadius={5}
                    boxShadow={'5px 5px 10px #78cd'}
                    sx={{
                        ":hover": {
                            boxShadow: ' 10px 10px 20px #ccc'
                        }
                    }}
                >11
                    <Typography variant='h4' textAlign="center">

                        {!isSignUp ? "Login Page" : "SignUp Page"}

                    </Typography>
                    {isSignUp && <TextField fullWidth="true" onChange={changHandler} label="Name" margin='normal' value={inputs.name} name='name' type={"text"} variant="outlined" placeholder='Enter Your Name' />}
                    <TextField label="email" fullWidth="true" onChange={changHandler} margin='normal' type={"text"} value={inputs.email} name='email' variant="outlined" placeholder='Enter Email' />

                    <TextField label="pwd" fullWidth="true" onChange={changHandler} margin='normal' type={"text"} value={inputs.pwd} name='pwd' variant="outlined" placeholder='Enter Password' />
                    {isSignUp && <TextField onChange={changHandler} label="phn" fullWidth="true" margin='normal' value={inputs.phn} name='phn' type={"text"} variant="outlined" placeholder='Enter Phone' />}
                    <Button endIcon={!isSignUp ? <LoginOutlinedIcon /> : <HowToRegOutlinedIcon />} type='submit' sx={{ marginTop: 3, borderRadius: 4 }} variant='contained' color='warning'>
                        {!isSignUp ? "Login" : "Sign Up"}
                    </Button>
                    <Button onClick={resetData} sx={{ marginTop: 3, borderRadius: 4 }}>

                        Go to {isSignUp ? "Login" : "Reg Page"} Page
                    </Button>

                </Box>

            </form>
        </div>
    )
}

export default Login