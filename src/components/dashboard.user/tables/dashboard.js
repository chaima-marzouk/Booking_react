import React from "react";
import Box from '@mui/material/Box';
import {PrivateRoute,Routes,Route} from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import SignIn from "../../authentification/forms/signIn";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Grid from "@mui/material/Grid"
import Item from "@mui/material/ListItem"
import TableUser from "./dashboardComponents/tableUser";
import DashBoardStat from "./dashboardComponents/dashboardStat";
import DashBoardN from "./dashboardComponents/dashBoardN";




class DashBoard extends React.Component{
    render(){
        return <Box > 
                    <Box sx={{ flexGrow: 1 }}>
                        <AppBar position="static">
                            <Toolbar>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                            >
                            </IconButton>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                News
                            </Typography>
                            <Button color="inherit">Login</Button>
                            </Toolbar>
                        </AppBar>
                    </Box>


                    <Grid sx={{width: '100%', height: '100vh', margin: "0%", padding: "0%"}} container spacing={2}>
                        <Grid item sx={{height: "100vh", width: "100%",margin: "0%", padding: "0%",display: "flex", justifyContent: "center", alignItems: "center"}} xs={2}>
                            <Item sx={{display: "flex", justifyContent: "center", alignItems: "center",height: "60%"}}>
                                <DashBoardN />
                            </Item>
                        </Grid>
                        <Grid item sx={{height: "100vh", width: "100%",margin: "0%", padding: "0%"}} xs={10}>
                            <Item sx={{display: "flex", flexDirection: "column"}}>
                                <DashBoardStat/>
                            <Routes>
                                <Route path="users" element={<TableUser/>}/>
                                <Route path='hotel' element={<h1>hohohohohoho</h1>}/>                        
                            </Routes>

                            </Item>
                        </Grid>
                    </Grid>


                    

                </Box>

    }
}


export default DashBoard;