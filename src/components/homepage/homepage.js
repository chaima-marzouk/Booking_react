import React from 'react'
import { Box } from '@mui/system'
// import ResponsiveAppBar from './homepage.components/navbar'
import HomePageHeader from './homepage.components/homepage.header'
import Navbar from './homepage.components/navbar'
import StatSection from './homepage.components/section.stat'
import Footer from './homepage.components/Footer'



const styling = {
    width: "100%",
    minHeight: "100vh"
}



const  HomePage = (props)=>{

   return  (<Box sx={styling}>
                <Navbar/>
                <HomePageHeader/>
                <StatSection/>
                <Footer/>
            </Box>)
}


export default HomePage;

