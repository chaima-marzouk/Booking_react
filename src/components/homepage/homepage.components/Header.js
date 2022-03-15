import SearchBar from './home.searchbar';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import '@fontsource/roboto/700.css';



const paperStyling = {
    width: '90%',
    height: '80vh',
    backgroundColor: 'rgba(238,238,238,0.2)',
}

function HeaderSection(props){
    return ( <Paper sx={paperStyling}>
                <Grid sx={{width:"100%", height:"100%", margin: 0,padding: 0}} container spacing={2}>
                    <Grid sx={{height: "90%",margin: 0,padding: 0, display:'flex',flexDirection:'column', alignItems:'center',justifyContent:'center'}} item xs={12}>
                        <Typography sx={{opacity: 1, color: "rgba(245,242,231)" }} variant='h4'>Make Your Holiday</Typography>                   
                        <Typography variant='h2' sx={{color: "rgba(245,242,231)"}}>Memorable</Typography> 
                        <Typography variant='body1' sx={{color: "rgba(245,242,231)"}}>register now and reserve your room</Typography>
                        <SearchBar/>
                        <Button variant='outlined' color='warning'  sx={{marginTop: "15px",marginBottom: '10px', width: "25%", '&:hover': {backgroundColor: "#ed6c02", color: "#1B1A17"}}}>Search</Button>
                    </Grid>
                    <Grid item xs={0} sx={{height: "90%",margin: 0,padding: 0, display:'flex',flexDirection:'column', alignItems:'center',justifyContent:'center'}}>
                    </Grid>
                </Grid>
            </Paper>)
}




export default HeaderSection;