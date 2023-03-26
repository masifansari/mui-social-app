import { ConnectWithoutContact, Mail, Notifications } from '@mui/icons-material';
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react';

const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between"
});

const Search = styled("div")(({ theme })=>({
  backgroundColor:"white",
  padding:"0 10px",
  borderRadius:theme.shape.borderRadius,
  width: "40%",
}));
const Icons = styled(Box)(({ theme })=>({
  display:"none",
  gap:"20px",
  alignItems:"center",
  [theme.breakpoints.up("sm")]:{   //mobile screen will not show icons
    display:"flex"
  }
}));
const UserBox = styled(Box)(({ theme })=>({
  display:"flex",
  gap:"20px",
  alignItems:"center",
  [theme.breakpoints.up("sm")]:{    //big screen will not show userbox
    display:"none"
  }
}));

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <AppBar position='sticky'>
        <StyledToolbar>
            <Typography variant='h6' sx={{display:{xs:"none",sm:"block"}}}>PEOPLE BOOK</Typography>
            <ConnectWithoutContact fontSize='large' sx={{display:{xs:"block",sm:"none"}}}/>
            <Search><InputBase placeholder='search.....'/></Search>
            <Icons>
            <Badge badgeContent={4} color="error">
              <Mail/>
            </Badge>
            <Badge badgeContent={4} color="error">
              <Notifications/>
            </Badge>
            <Avatar sx={{width:30,height:30}} src='images/avatar.jpeg'
              onClick={e=>setOpen(true)}
            />
            </Icons>
            <UserBox onClick={e=>setOpen(true)}>
              <Avatar sx={{width:30,height:30}} src='images/avatar.jpeg'/>
              <Typography variant='span'>John</Typography>
            </UserBox>
        </StyledToolbar>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e)=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar