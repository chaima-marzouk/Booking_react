import Box from '@mui/material/Box';
// import { Grid } from '@mui/material'
import img from '../../../imghotel.jpg';
import HeaderSection from './Header';







const styling = {
    width: "100%",
    minHeight: "100vh",
    backgroundImage: `url(${img})`,
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: 'center'
}


function HomePageHeader(props){
    return (
            <Box sx={styling}>
                <HeaderSection />
            </Box>        
        )
}


export default HomePageHeader;