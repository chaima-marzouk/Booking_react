import { Paper, TextField } from "@mui/material";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";


const Footer = (props)=>{


    return (
            <Paper sx={{height:'40vh', width: "100%",backgroundColor: "#0F0E0E", border: "1px white solid"}}>
                <Grid sx={{height: "100%"}} container spacing={0}>
                    <Grid item xs={4} container direction="column"   alignItems="center" justifyContent="center">
                        <Typography sx={{color:'white'}}  variant="h3">
                            LOGO
                        </Typography>
                    </Grid>



                    <Grid item xs={4} container direction="column"   alignItems="center" justifyContent="center">
                        <Typography variant="body1" sx={{color:'white',marginBottom:'10px'}}>
                            Contact Us:
                        </Typography>
                        <TextField  id="outlined-basic" label="Email" variant="filled" color="warning" sx={{backgroundColor: "rgba(238,238,238,0.2)", marginBottom:'10px',width: "50%"}}/>
                        <TextField id="outlined-basic" label="Your Message" variant="filled" color="warning" sx={{backgroundColor: "rgba(238,238,238,0.2)", marginBottom:'10px',width: "50%"}} />
                        <Button sx={{width: "40%", marginTop: "5px"}} variant="contained" color="warning">Submit</Button>

                    </Grid>

                    <Grid sx={{height: "100%"}} container direction="column"   alignItems="center" justifyContent="center" item xs={4}>
                        <Typography sx={{color:'white',marginBottom: "10px"}}  variant='body1'>
                            Contact Us: 0645168595
                        </Typography>

                        <Typography sx={{color:'white',marginBottom: "10px"}}  variant='body1'>
                            address: Qu ElQods N353 Youssoufia
                        </Typography>

                        <Typography sx={{color:'white', marginBottom: "10px"}}  variant='body1'>
                            Email: esraidi12@gmail.com
                        </Typography>
                    </Grid>
                </Grid>


            </Paper>
    )

}



export default Footer;