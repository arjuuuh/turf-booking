import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link, Links } from 'react-router-dom';
import Logo from '../assets/logturf.png';

const Menubar = () => {
  return (
    <div>                <Box sx={{ flexGrow: 1}}>
    <AppBar color='success'style={{backgroundColor:"black",height:"90px"}}>


      <Toolbar style={{height:"170px"}}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 1 }}
        >
         
        </IconButton>
        <img src={Logo} alt="logo" style={{width:"90px",height:"90px",marginTop:"-10px",marginLeft:"0px"}}/>
        <Link to='/'>
        <Button variant="text"  style={{marginLeft:'100px',color:"white"}}>home</Button>
        </Link>

        <Link to='/offers'>
        <Button variant="text"  style={{marginLeft:"25px",color:"white"}}>offers</Button>
        </Link>
       <Link to='/booknow'>
        <Button variant="text"  style={{marginLeft:'25px',color:"white"}}>book now</Button>
        </Link>
        <Link to='/summercamp'>
        <Button variant="text"  style={{marginLeft:'25px',color:"white"}}>summer camp</Button>
        </Link>
        <Link to='/contactus'>
        <Button variant="text"  style={{marginLeft:'25px',color:"white"}}>contact us</Button>
        </Link>
        <Link to='/aboutus'>
        <Button variant="text"  style={{marginLeft:'25px',color:"white"}}>About</Button>
       </Link>
       <Link to='/admin'>
       <Button variant="text"  style={{marginLeft:'25px',color:"white"}}>Admin</Button>
       </Link>
      </Toolbar>
    </AppBar>
  </Box></div>
  )
}

export default Menubar