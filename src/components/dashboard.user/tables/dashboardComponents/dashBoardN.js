import React from "react";
import Box from '@mui/material/Box';
import { Button } from "@mui/material";
import Link  from "@mui/material/Link";
import { borderRadius } from "@mui/system";





class DashBoardSideBar extends React.Component {
    

    render(){
        return  <Box sx={{width: "100%", height: "100%",  borderRadius: "5px", justifyContent:"center", alignItems: "center"}}>

                    <Box sx={{width: "100%", height: "50%", display: "flex", flexDirection: "column", justifyContent: "centre", alignItems: "center" }}>
                        <Button sx={{width: "100%", border: "black solid 1px",backgroundColor: "#5D8BF4", color: "black",borderRadius: "10px"}} component={Link} to='user'>User</Button>
                        <Button sx={{width: "100%", border: "black solid 1px", backgroundColor: "#5D8BF4",color: "black", borderRadius: "10px"}} component={Link} to='owner'>Owner</Button>
                    </Box>

                </Box>

    }
}



export default DashBoardSideBar;