import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {Routes, Route ,Outlet} from "react-router-dom"
import SideBar from './sidebar';
import SignIn from '../authentification/signIn';
import ModalUser from './modal_add_User';
import ModalHotel from './modal_Add_Hotel';
// import AllHotels from './AllHotels'
import AllHotels from './AllHotels'
import Grid from "@mui/material/Grid"

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return    <Box sx={{width: "100%", height:"100%"}}>
    <Grid sx={{width: '100%', height: '100vh', margin: "0%", padding: "0%"}} container spacing={2}>
   
                           
  <AppBar position="static">
<Container maxWidth="xl">
<Toolbar disableGutters>
<Typography
variant="h6"
noWrap
component="div"
sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
>
Booking ❤
</Typography>


<Box>
<IconButton
size="large"
aria-label="account of current user"
aria-controls="menu-appbar"
aria-haspopup="true"
onClick={handleOpenNavMenu}
color="inherit"
>
<MenuIcon />
</IconButton>
<Menu
id="menu-appbar"
anchorEl={anchorElNav}
anchorOrigin={{
vertical: 'bottom',
horizontal: 'left',
}}
keepMounted
transformOrigin={{
vertical: 'top',
horizontal: 'left',
}}
open={Boolean(anchorElNav)}
onClose={handleCloseNavMenu}
sx={{
display: { xs: 'block', md: 'none' },
}}
>

</Menu>
</Box>
<Typography
variant="h6"
noWrap
component="div"
sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
>
LOGO
</Typography>
<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

</Box>

<Box sx={{ flexGrow: 0 }}>
<Tooltip title="Open settings">
<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
<Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
</IconButton>
</Tooltip>
<Menu
sx={{ mt: '45px' }}
id="menu-appbar"
anchorEl={anchorElUser}
anchorOrigin={{
vertical: 'top',
horizontal: 'right',
}}
keepMounted
transformOrigin={{
vertical: 'top',
horizontal: 'right',
}}
open={Boolean(anchorElUser)}
onClose={handleCloseUserMenu}
>
{settings.map((setting) => (
<MenuItem key={setting} onClick={handleCloseUserMenu}>
<Typography textAlign="center">{setting}</Typography>
</MenuItem>

))}
</Menu>
</Box>
<ModalUser/>
<ModalHotel/>
</Toolbar>
</Container>
</AppBar>

<Grid item sx={{height: "100vh", width: "100%",margin: "0%", padding: "0%",display: "flex", justifyContent: "center", alignItems: "center"}} xs={2}>

<SideBar/>
</Grid>
<Grid item sx={{ width: "100%",margin: "0%", padding: "0%"}} xs={10}>
 <Outlet/>
 </Grid>
 </Grid>

</Box>

            
 

    

};
export default ResponsiveAppBar;