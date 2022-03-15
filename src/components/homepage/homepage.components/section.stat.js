import axios from "axios";
import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Paper } from "@mui/material";
import HotelIcon from '@mui/icons-material/Hotel';
import RoomIcon from '@mui/icons-material/Room';
import PersonIcon from '@mui/icons-material/Person';
import '@fontsource/roboto/700.css';



const StatSection = (props)=>{
    const [hotels, sethotel] = useState(0)
    const [rooms, setroom] = useState(0)
    const [users, setuser] = useState(0)



    useEffect(async ()=>{
        const hotel =  axios.get('http://localhost:8080/api/hotels')
                                .then((res)=>{
                                    sethotel(res.data.length)
                                    console.log(res.data.length)
                                })
                                .catch((error) => console.log(error))

        const room =  axios.get('http://localhost:8080/api/rooms')
                                .then((res)=>{
                                    setroom(res.data.length)
                                    console.log(res.data.length)
                                })
                                .catch((error)=> console.log(error))
        
        const user =  axios.get('http://localhost:8080/api/users')
                                .then((res)=>{
                                    setuser(res.data.users.length)
                                    console.log(res.data.users.length)
                                })
                                .catch((error)=> console.log(error))

        
    })



    return (
        <Box sx={{height: '40vh', width: "100%", backgroundColor: "#0F0E0E", margin: "auto"}}>
            <Paper sx={{width: "70%", height: "100%",backgroundColor: 'rgba(238,238,238,0)', margin: "auto"}}>
                <Grid sx={{height: "100%", padding: 0, margin: 0}} container spacing={4}>
                    <Grid  sx={{padding: '0px', margin: 0}} item  xs={4}>
                        <Paper sx={{display: "flex", justifyContent:"center", alignItems:"center",width: "50%", height: "50%",margin: "auto", marginTop: "15px",backgroundColor: 'rgba(238,238,238,0)','&:hover':{border: "2px #ed6c02 solid"}}}>
                            <Typography sx={{color:"#ed6c02"}}  variant="h2">
                                {hotels}
                            </Typography>

                        </Paper>
                        <Grid container spacing={0} >
                            <Grid  item xs={12} container justifyContent="center">
                                <HotelIcon sx={{ fontSize: 30 }} color="warning" />
                                <Typography sx={{color: "white",marginLeft: "10px"}} variant="h5">Hotels Number</Typography>
                            </Grid>


                        </Grid>

                        

                    </Grid>

                    <Grid item  xs={4}>
                        <Paper sx={{display: "flex", justifyContent:"center",alignItems:"center",width: "50%", height: "50%",  margin: "auto",marginTop: "15px",backgroundColor: 'rgba(238,238,238,0)','&:hover':{border: "2px #ed6c02 solid"}}}>
                        <Typography sx={{color:"#ed6c02"}} variant="h2">
                                {rooms}
                        </Typography>
                        </Paper>
                        <Grid container spacing={0} >
                            <Grid  item xs={12} container justifyContent="center">
                                <RoomIcon sx={{ fontSize: 30 }} color="warning" />
                                <Typography sx={{color: "white", marginLeft: "10px"}}   variant="h5">Rooms Number</Typography>
                            </Grid>


                        </Grid>
                    </Grid>


                    <Grid item  xs={4}>
                    <Paper sx={{display: "flex", justifyContent:"center",alignItems:"center",width: "50%", height: "50%",  margin: "auto",marginTop: "15px",backgroundColor: 'rgba(238,238,238,0)','&:hover':{border: "2px #ed6c02 solid"}}}>
                        <Typography sx={{color:"#ed6c02"}} variant="h2">
                                {users}
                        </Typography>
                        </Paper>
                        <Grid container spacing={0} >
                            <Grid  item xs={12} container justifyContent="center">
                                <PersonIcon sx={{ fontSize: 30 }} color="warning" />
                                <Typography sx={{color: "white", marginLeft: "10px"}}   variant="h5">Client Number</Typography>
                            </Grid>


                        </Grid>

                    </Grid>

                </Grid>

            </Paper>


        </Box>

    )
}


export default StatSection;