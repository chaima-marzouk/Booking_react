import React from "react";
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Item from "@mui/material/ListItem"



class DashBoardStat extends React.Component {
    render(){
        return  <Box>
                    <Grid container spacing={1}>
                        <Grid item xs={6}>
                            <Item>
                                <h1>Number of Owners</h1>
                            </Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item>
                            <h1>Number of Users</h1>

                            </Item>
                        </Grid>

                    </Grid>



                </Box>
    }
}


export default DashBoardStat;