import React, { useState } from 'react'
import Box from '@mui/material/Box';
import { Paper, TextField, Typography, Button } from '@mui/material';
import { signupfb } from '../conflig/firbase/firebasemethods';
import { useNavigate } from 'react-router-dom';
import { sendData } from '../conflig/firbase/firebasemethods';

function SignUp() {
    const [userObj, setUserObj] = useState({})
    const navigate = useNavigate()
    let signUpUser = () => {
        console.log(userObj)
        if (!userObj.email) {
            alert("Email is Required")
            return
        }
        if (!userObj.password || userObj.password.length < 6) {

            alert("Password is Required & grreater than 6 character")
            return
        }
        signupfb(userObj).then((res) => {
            console.log(res)
            alert("Signup Successfully")
               navigate("/login")
               sendData(userObj, 'users',res.user.uid).then(()=>{
                   console.log("Successfully Saved" )
                   .catch((error)=>{
                       console.log(error)
                   })
               })
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
                        <Typography variant='h2' >Sign Up</Typography>
                        <TextField onChange={(e) => setUserObj({ ...userObj, name: e.target.value })} className="py-4" sx={{ width: 400 }} id="standard-basic" label="Name" variant="standard" />
                        <TextField onChange={(e) => setUserObj({ ...userObj, email: e.target.value })} className="py-4" sx={{ width: 400 }} id="standard-basic" label="Email" type='email' required={true} variant="standard" />
                        <TextField onChange={(e) => setUserObj({ ...userObj, password: e.target.value })} className="py-4" sx={{ width: 400 }} id="standard-basic" label="Password" type="password" required={true} variant="standard" />
                        <Button onClick={signUpUser} sx={{ width: 400 }} color="success" variant="contained">Signup</Button>
                    </Paper>
                </Box>
            </Box>
        </>
    )
}

export default SignUp