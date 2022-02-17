import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import img from "../../../src/hotelImage.jpg"





class AuthentificationImage extends React.Component{
    render(){
        return  <Box sx={{ width: "100%", height: "100%"}}>
                    <img src= {img} style= {{width: "100%", height: "100%"}}/>
                </Box>
    }
}


export default AuthentificationImage;