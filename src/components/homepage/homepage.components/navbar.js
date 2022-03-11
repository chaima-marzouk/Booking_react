import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';




const Navbar = ()=>{
    return (<AppBar position='fixed' sx={{backgroundColor: "black"}}>
                <Toolbar >
                    <Typography variant="h6" noWrap component="div" sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
                        LOGO
                    </Typography>
                    <Box sx={{flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent:'end',height:"100%" }}>
                        <Button  sx={{ my: 2, color: 'white', display: 'block' }}>Hotels</Button>
                        <Button sx={{ my: 2, color: 'white', display: 'block' }}>Hotels</Button>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent:'end',height:"100%"}}>
                        <Button  variant='contained' color='primary' sx={{height: '10%'}}>Hotels</Button>
                        <Button sx={{ my: 2, color: 'white', display: 'block' }}>Hotels</Button>
                    </Box>


                </Toolbar>


    </AppBar>)
}


export default Navbar;