import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '@mui/material/Button';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Grid, Stack } from '@mui/material';


export const Login = () => {
    const [name, setName] = useState("")
    const [pwd, setPwd] = useState("")

    const dispatch = useDispatch();
    const user = useSelector(state => state.user);

    const login = () => {
        const payload = user.find(user => user.name === name && user.pwd === pwd);

        if (payload) {
            dispatch({
                type: "LOGIN",
                payload
            });
        } else {
            alert("Wrong Password");
        }

    }

    return (
        <>
        <Grid container>
             <Grid item>fdfsf</Grid>
             <Grid item>fdfdsfds</Grid>
             <Grid item>hgfhfghgf</Grid>
        </Grid>
        <Stack spacing={10}>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '50ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <div>
                <TextField required
                        id="outlined-helperText"
                        label="Name"
                        name='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        helperText="Enter Your Name"
                    />
                    <TextField required
                        id="outlined-helperText"
                        label="Password"
                        name='pwd'
                        value={pwd}
                        onChange={(e) => setPwd(e.target.value)}
                        helperText="Enter Your Name"
                    />
                    <input type="button" value='Reg' onClick={login} />
                </div>
            </Box>
            </Stack>

        </>
    )
}