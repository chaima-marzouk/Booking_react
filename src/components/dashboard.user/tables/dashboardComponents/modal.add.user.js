import React from 'react'
import axios from 'axios';
import Button from '@mui/material/Button';
import  Modal  from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';




const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
    justifyContent: "centre"
  };




class UserModal extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            open: false,
            name: null,
            email: null,
            password: null,
            role: null
        }
    }

     handleOpen = ()=>{
        this.setState({open: true})
    }

    handleClose = ()=>{
        this.setState({open: false})

    }


    handleSubmit = async (e)=>{
        e.preventDefault()
        console.log(e)

        const user = axios.post("http://localhost:8080/api/users/signup",{
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            passwordConfirm: this.state.password,
            role:this.state.role})
            .then((res)=>{
                console.log(res)
            })
            .catch((err)=>{
                console.log(err)
            })

    }



    render(){

            return  <div>
                        <Button onClick={this.handleOpen}>Open modal</Button>
                        <Modal
                        open= {this.state.open}
                        onClose= {this.handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        >
                        <Box component="form" onSubmit={this.handleSubmit} sx={style}>
                            <TextField id="filled-basic" onChange={(e)=> this.setState({name: e.target.value})} label="username" variant="filled"/>
                            <TextField id="filled-basic" onChange={(e)=> this.setState({email: e.target.value})} label="email" variant="filled"/>
                            <TextField id="filled-basic" onChange={(e)=> this.setState({password: e.target.value})} label="password" variant="filled"/>
                            <TextField id="filled-basic" onChange={(e)=> this.setState({role: e.target.value})} label="role" variant="filled"/>
                            <Button type="submit" variant="contained" color="success">Submit</Button>
                        </Box>
                        </Modal>
                    </div>
    }
}


export default UserModal;