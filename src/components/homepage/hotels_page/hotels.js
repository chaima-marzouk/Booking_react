import Navbar from '../homepage.components/navbar';
import Box from '@mui/material/Box';
import Card from './card';
import '../../../css/hotel.css'

const HotelPage = () =>{
    return (<Box style={{backgroundColor: "#5c4640"}} className='cardd'>
        <Navbar/>
        <h1>Hello</h1>
        <Card/>
    </Box>)

}


export default HotelPage;