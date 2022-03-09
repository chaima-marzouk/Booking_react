import React from "react";
import axios from "axios"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Link } from "@mui/material";





class SignUpForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: null,
            email: null,
            password: null,
            comfirmPassword: null
        }
    }

        formSubmit = async (e)=>{
            e.preventDefault()
            console.log(this.state)
            const user = await axios.post("http://localhost:8080/api/users/signup", {name: this.state.username, email:this.state.email, password: this.state.password, passwordConfirm: this.state.comfirmPassword},(err, res)=>{
                        
                        if(res){
                            console.log(res)
                        }else console.log(err)

            })
            console.log(user)
    
        }


    render(){
            return <form style={{width: "100%", height: "100%"}} onSubmit={this.formSubmit}>
            <Box sx={{width: "100%", height: "100%", border: "1px solid white", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <Typography variant="h5">SIGN UP</Typography>
            <Typography variant="h7" sx={{marginBottom: "10px"}}>enter your information ! </Typography>
            <TextField onChange={(e)=> this.setState({username: e.target.value})} sx={{width: "70%"}} helperText="Please enter a Username" id="demo-helper-text-misaligned" label="Username"/>
            <TextField onChange={(e)=> this.setState({email: e.target.value})} sx={{width: "70%"}} helperText="Please enter a Email" id="demo-helper-text-misaligned" label="Email"/>
            <TextField onChange={(e)=> this.setState({password: e.target.value})} sx={{width: "70%"}} helperText="Please enter a Password" id="demo-helper-text-misaligned" label="Password"/>
            <TextField onChange={(e)=> this.setState({comfirmPassword: e.target.value})} sx={{width: "70%"}} helperText="Please Confirm password" id="demo-helper-text-misaligned" label="Confirm password"/>
            <Box sx={{width: "70%"}}>
            <FormControlLabel label="Remember Me" control={<Checkbox />}/>
            </Box>
            <Box sx={{width: "70%"}}>
                <Button onClick={this.formSubmit} sx={{width: "100%"}}  variant="contained" type="Submit" color="success">Submit</Button>
            </Box>
            <Box sx={{marginTop: "10px"}}>
            <Link href="/signin" underline="hover">
                Already have an account ?
            </Link>
            </Box>
            

        </Box>

                    </form>
    }

}


export default SignUpForm;