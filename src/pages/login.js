import { Button, Paper, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { loginfb } from '../conflig/firbase/firebasemethods';

export default function Login() {
    const [userObj, setUserObj] = useState({})
const navigate = useNavigate()
    let loginUser = () => {
        console.log(userObj)
        if (!userObj.email) {
            alert("Email is Required")
            return
        }
        if (!userObj.password || userObj.password.length < 6) {

            alert("Password is Required & grreater than 6 character")
            return
        }
        loginfb(userObj).then((success) => {
            console.log("Login Successfully")
            navigate(`/${success.user.uid}`)
        }).catch((err) => {
            console.log(err)
        });
    }
    return (
        <>
         
            <Box className="App" padding={3}>

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        '& > :not(style)': {
                            m: 1,
                            width: 500,
                            height: 500,
                        },
                    }}>
                    <Paper elevation={3} className="p-5" >
                        <Typography variant='h2' >Log In</Typography>
                        <TextField onChange={(e) => setUserObj({ ...userObj, email: e.target.value })} className="py-4" sx={{ width: 400 }} id="standard-basic" label="Email" type='email' variant="standard" />
                        <TextField onChange={(e) => setUserObj({ ...userObj, password: e.target.value })} className="py-4" sx={{ width: 400 }} id="standard-basic" label="Password" type="password" variant="standard" />
                        <Button onClick={loginUser} sx={{ width: 400, marginTop: "50px" }} color="success" variant="contained">Login</Button>
                    </Paper>
                </Box>
            </Box>
        </>
    )
}
