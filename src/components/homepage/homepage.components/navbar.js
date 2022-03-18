import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link } from "@mui/material";



const Navbar = ()=>{
    return (<AppBar position='fixed' sx={{backgroundColor: "black"}}>
                <Toolbar sx={{height: "100%"}}>
                    <Typography variant="h6" noWrap component="div" sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
                        LOGO
                    </Typography>
                    <Box sx={{flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent:'end',height:"100%" }}>
                   
                    <Link  href="/">
                        <Button  sx={{ my: 2, color: 'white', display: 'block' }}>Home</Button>
                    </Link>
                    <Link  href="/Hotels">
                        <Button  sx={{ my: 2, color: 'white', display: 'block' }}>Hotels</Button>
                    </Link>
                    <Link  href="/Hotels">
                        <Button  sx={{ my: 2, color: 'white', display: 'block' }}>Rooms</Button>
                    </Link>
                        
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, alignItems: "center", justifyContent:'end',height:"10%"}}>
                        <Button href='/signin'  sx={{ my: 2, color: 'white', display: 'block' }}>Login</Button>
                        <Button href='/signup'  variant='contained' color='primary' sx={{height: '30px'}}>Register</Button>

                    </Box>


                </Toolbar>


    </AppBar>)
}


export default Navbar;