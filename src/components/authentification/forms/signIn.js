import React from "react";
import axios from "axios"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';



class SignInForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username: null,
            password: null
        }
    }


    formSubmit = async(event)=>{
        event.preventDefault()
        console.log(this.state)
        const user = await axios.post("http://localhost:8080/api/users/login", {email: this.state.email, password: this.state.password})
            .then((res)=>{
                window.location = '/Dashbaord'
            })

        console.log(user)
    }


    render(){
        return  <form style={{width: "100%", height: "100%"}} onSubmit= {this.formSubmit}>
                    <Box sx={{width: "100%", height: "100%", border: "1px solid white", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                    <Typography variant="h5">SIGN In</Typography>
                    <Typography variant="h7" sx={{marginBottom: "10px"}}>enter your information ! </Typography>
                    <TextField onChange={(e)=>{this.setState({email: e.target.value})}} sx={{width: "70%"}} helperText="Please enter a email" id="demo-helper-text-misaligned" label="email"/>
                    <TextField onChange={(e)=>{this.setState({password: e.target.value})}} sx={{width: "70%"}} helperText="Please enter a Password" id="demo-helper-text-misaligned" label="Password"/>
                    <Box sx={{width: "70%"}}>
                        <FormControlLabel label="Remember Me" control={<Checkbox />}/>
                    </Box>
                    <Box sx={{width: "70%"}}>
                        <Button type="submit" sx={{width: "100%"}} variant="contained" color="success">Submit</Button>
                    </Box>

                    </Box>

                </form>
    }
}


export default SignInForm;