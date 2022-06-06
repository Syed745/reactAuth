import React, { useEffect, useState } from 'react'
import MiniDrawer from './Drawer'
import { getData } from '../firbase/firebasemethods'
import { useParams } from 'react-router-dom'
import { signutfb } from 'firebase/auth'
import { Box, Button } from '@mui/material'

export default function Dashboard() {
  const [first, setfirst] = useState({})

  // const logOut = () =>{
  //   try{
  //      signutfb();
  //   }catch{
  //     alert('error')
  //   }
  // }
  // setfirst(getData)
  const params = useParams()

  useEffect(() => {
    if (params.id) {
      getData('users');
    }
  }, [])
  return (
    <>
    {/* {first.map((e)=>{
      e.user
    })} */}
      <MiniDrawer />
      <Box className='d-flex justify-content-center fixed-bottom bd-highlight'>

    <Button  variant="contained" color='error'>LOGOUT</Button>
      </Box>
    </>
  )
}
