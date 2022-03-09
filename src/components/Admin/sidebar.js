import { Box } from '@mui/material';
import * as React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

class SideBar extends React.Component {
    render(){
        return<Box  
                   sx={{
            width: 200,
            height: '95vh',
            padding: '2rem 0',
            backgroundColor: 'white',
            marginLeft: '151px',
            boxShadow: '0px 2px 8px rgba(0, 0, 0, .2)'
          }}>
              <Link to="hotels" underline="hover">
             <Button
             sx={{
                width: "64%",
                marginBottom: "39px",
                marginTop: "222px"
             }} 
             
             variant="contained" display="inline"  >Hotels</Button> 
             </Link>
             <Link to="users" underline="hover">
             <Button
              sx={{
                width: "64%",
                marginBottom: "39px"
             }}
              variant="contained" display="inline" >Users</Button>
              </Link>
        </Box>

    }
}

export default SideBar;
