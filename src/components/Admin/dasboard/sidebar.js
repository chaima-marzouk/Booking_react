import { Box } from '@mui/material';
import * as React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function SideBar({hotelTable, userTable, setUserTable, setHotelTable}) {
    // console.log(props)

  
    
        return <Box  
                   sx={{
            width: 200,
            height: '95vh',
            padding: '2rem 0',
            backgroundColor: 'white',
            marginLeft: '151px',
            boxShadow: '0px 2px 8px rgba(0, 0, 0, .2)'
          }}>
              
             <Button
             sx={{
                width: "64%",
                marginBottom: "39px",
                marginTop: "222px"
             }} 
             
             variant="contained" display="inline" onClick={() => setHotelTable(!hotelTable) && setUserTable(userTable)}>Hotels</Button> 
             
             <Button
              sx={{
                width: "64%",
                marginBottom: "39px"
             }}
              variant="contained" display="inline"
              onClick={() => {setUserTable(!userTable) && setHotelTable(hotelTable)}}
              >Users</Button>
        </Box>

    
}

export default SideBar;
