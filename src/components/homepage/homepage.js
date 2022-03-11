import React from 'react'
import { Box } from '@mui/system'
// import ResponsiveAppBar from './homepage.components/navbar'
import HomePageHeader from './homepage.components/homepage.header'
import Navbar from './homepage.components/navbar'



const styling = {
    width: "100%",
    height: "100vh"
}



const  HomePage = (props)=>{

   return  (<Box sx={styling}>
                <Navbar/>
                <HomePageHeader/>
            </Box>)
}


export default HomePage;

