import React from "react";
import axios from "axios";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import UserModal from './modal.add.user'



class TableUser extends React.Component {
        constructor(props){
            super(props)
            this.state = {
                users: []
            }
            
        }


        



    async componentDidMount(){

        const users = await axios.get("http://localhost:8080/api/users/user/user")
                            .then((res)=>{
                                this.setState({users: res.data})
                                console.log(this.state.users)
                            })
                            .catch((err)=>{
                                console.log(err)
                            })
    }

    handleDelete = (id)=>{
        const users = axios.delete("http://localhost:8080/api/users/"+id)
                     .then((res)=>{
                        this.setState({users: res.data})
                         console.log(res)
                     })
                     .catch((err)=>{
                         console.log(err)
                     })
    }


    render(){
        
        return <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650, }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell  align="right">Id</TableCell>
                                <TableCell  align="right">Username</TableCell>
                                <TableCell  align="right">Email</TableCell>
                                <TableCell  align="right">Password</TableCell>
                                <TableCell  align="right">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                         

                        {this.state.users.map(user=>{
                        return ( <TableRow>
                                  
                                    <TableCell  align="right">{user._id}</TableCell>
                                    <TableCell  align="right">{user.name}</TableCell>
                                    <TableCell  align="right">{user.email}</TableCell>
                                    <TableCell  align="right">{user.password}</TableCell>
                                    <TableCell  align="right">
                                        <Button variant="contained" color="warning">Update</Button>
                                        <Button  variant="contained" color="error" onClick={()=>this.handleDelete(user._id)} >Delete</Button>
                                    </TableCell>
                                </TableRow>)
                        })}

                        </TableBody>
                    </Table>
                    <UserModal/>

                </TableContainer>
    }
}


export default TableUser;



