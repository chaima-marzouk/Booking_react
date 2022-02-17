import React from "react";
import Grid from "@mui/material/Grid"
import Item from "@mui/material/ListItem"

import AuthentificationImage from "./authentificationImage";
import SignUpForm from "../../components/authentification/forms/signUp"




class SignUp extends React.Component{

    render(){
        return <Grid sx={{width: '100%', height: '100vh', margin: "0%", padding: "0%"}} container spacing={0}>
            <Grid item sx={{height: "100vh", width: "100%",margin: "0%", padding: "0%"}} xs={7}>
                <Item sx={{height: "100vh", width: "100%",margin: "0%", padding: "0%"}}>
                    <AuthentificationImage/>
                </Item>
            </Grid> 
            <Grid item xs={5} sx={{width: "100%", height: "100%", display: "flex",  justifyContent: "center", alignItems: "center"}}>
                <Item sx={{width: "70%", height: "80%"}}>
                    <SignUpForm/>
                </Item>
            </Grid> 
        </Grid>
    }
    
}

export default SignUp;