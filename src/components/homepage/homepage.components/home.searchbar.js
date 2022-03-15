import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';



const PAPERSTYLES = {
    width: "50%",
    height: "15%",
    backgroundColor: 'rgba(238,238,238,0.1)',
    display: "flex",
    alignItems: "center"
}




function SearchBar(){
    return (
        <Paper sx={PAPERSTYLES}>
            <FormControl variant="outlined" color="warning" sx={{width: "80%", margin: "auto"}} >
                <InputLabel htmlFor="input-with-icon-adornment" sx={{color: "#ed6c02"}}>
                ex: Marrakech
                </InputLabel>
            <Input
                variant="filled"
                sx={{width:"100%", backgroundColor:"rgba(238,238,238,0.3)", border: "2px solid #ed6c02"}}
                id="input-with-icon-adornment"
                startAdornment={
                <InputAdornment position="start">
                <SearchSharpIcon />
                </InputAdornment>
                }
                />
            </FormControl>
        </Paper>
        
    )
}



export default SearchBar;