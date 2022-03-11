import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';



const Navbar = ()=>{
    return (<AppBar position='fixed' sx={{backgroundColor: "black"}}>
        <Toolbar>
            <Typography variant="h6" noWrap component="div" sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
                LOGO
            </Typography>


        </Toolbar>


    </AppBar>)
}


export default Navbar;