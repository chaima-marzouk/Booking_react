import axios from "axios";
import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Paper } from "@mui/material";
import '@fontsource/roboto/700.css';



const StatSection = (props)=>{
    const [hotels, sethotel] = useState(0)
    const [rooms, setroom] = useState(0)



    useEffect(async ()=>{
        const hotel = await axios.get('http://localhost:8080/api/hotels')
                                .then((res)=>{
                                    sethotel(res.data.length)
                                    console.log(res.data.length)
                                })
                                .catch((error) => console.log(error))

        const room = await axios.get('http://localhost:8080/api/rooms')
                                .then((res)=>{
                                    setroom(res.data.length)
                                    console.log(res.data.length)
                                })
                                .catch((error)=> console.log(error))
        
    })



    return (
        <Box sx={{height: '40vh', width: "100%", backgroundColor: "#0F0E0E", margin: "auto"}}>
            <Paper sx={{width: "70%", height: "100%",backgroundColor: 'rgba(238,238,238,0)', margin: "auto"}}>
                <Grid sx={{height: "100%", padding: 0, margin: 0}} container spacing={4}>
                    <Grid  sx={{padding: '0px', margin: 0}} item  xs={6}>
                        <Typography sx={{color: "white"}} variant="h4">Hotels Number</Typography>
                        <Paper sx={{display: "flex", justifyContent:"center", alignItems:"center",width: "50%", height: "50%",margin: "auto", marginTop: "15px",backgroundColor: 'rgba(238,238,238,0)', border: "1px white solid",'&:hover':{border: "2px #ed6c02 solid"}}}>
                            <Typography sx={{color:"white"}}  variant="h2">
                                {hotels}
                            </Typography>

                        </Paper>

                        

                    </Grid>

                    <Grid item  xs={6}>
                    <Typography sx={{color: "white"}}  variant="h4">Rooms Number</Typography>
                        <Paper sx={{display: "flex", justifyContent:"center",alignItems:"center",width: "50%", height: "50%",  margin: "auto",marginTop: "15px",backgroundColor: 'rgba(238,238,238,0)', border: "1px white solid",'&:hover':{border: "2px #ed6c02 solid"}}}>
                        <Typography sx={{color:"white"}} variant="h2">
                                {rooms}
                            </Typography>
                        </Paper>

                    </Grid>

                </Grid>

            </Paper>


        </Box>

    )
}


export default StatSection;