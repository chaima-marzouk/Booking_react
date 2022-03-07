import axios from 'axios';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
// import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select' ;
import React ,{useState} from 'react';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '639px',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const Input = styled('input')({
  display: 'none',
});

export default function BasicModal() {
  
  // const url ="http://localhost:8080/api/hotels/hotel";
  // Declare a new state variable, which we'll call "count"
  const [name, setname] = useState('');
  const [description, setdisc] = useState('');
  const [stars, setstars] = useState('');
    


 const url= axios.post('http://localhost:8080/api/hotels/hotel',{
    name,
    description,
    stars


  })


const addHotel = (props) => {
  props.preventDefault();
  axios.post(url,{
    name:name,
    description:description,
    
    stars:stars,
   
  
  
  }).then((res) => {

    console.log(res.data);

    window.location="Dashbaord"
  });
}
  // Declare a new state variable, which we'll call "count"
 



  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button sx={{ color: "white", marginLeft:"30px"}} onClick={handleOpen} variant="contained" color='warning'>New Hotel</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"

        
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add New Hotel
          </Typography>
          {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
          <Box
      component="form"
      sx={{
        
      }}
      noValidate
      autoComplete="off"
    >



        <form  onSubmit={addHotel}>

      <TextField id="outlined-basic" onChange={(e)=>setname(e.target.value)} sx={{marginBottom:"20px", width:"80%"}} label="Please enter hotel Name" name='fname'  />
      <TextField id="outlined-basic"onChange={(e)=>setdisc(e.target.value)} sx={{marginBottom:"20px", width:"80%"}} label="Please enter Descreption " name='ldescription'  />
      
    
      <FormControl fullWidth>
  <InputLabel id="outlined-basic"   >Stars</InputLabel>
  <Select Id="outlined-basic"  onChange={(e)=>setstars(e.target.value)}  sx={{marginBottom:"20px", width:"80%"}} id="outlined-basic"  name='stars' label="Age" >
    <MenuItem value={1}>⭐</MenuItem>
    <MenuItem value={2}>⭐⭐</MenuItem>
    <MenuItem value={3}>⭐⭐⭐</MenuItem>
    <MenuItem value={4}>⭐⭐⭐⭐</MenuItem>
    <MenuItem value={5}>⭐⭐⭐⭐⭐</MenuItem>
    </Select>
  </FormControl>

   <Button variant="contained"  sx={{margin:"10px 10px 10px 10px", width:"30%",backgroundColor:"#F44336"}}  component="label">  Image Cover 
    <input type="file"  accept="image/*" hidden/>
    </Button>

   <Button variant="contained"  sx={{margin:"10px 10px 10px 10px", width:"30%"}}  component="label">  Images Hotel 
    <input type="file" multiple   accept="image/*" hidden  />
    </Button>
    
      {/* <TextField id="outlined-basic" sx={{marginBottom:"20px", width:"80%"}} label="Please upload picture " disabled defaultValue="Disabled" variant="outlined" /> */}
      <label htmlFor="icon-button-file">
        <Input accept="image/*" id="icon-button-file" type="file" />
        <IconButton color="primary" aria-label="upload picture" component="span">
         
        </IconButton>
      </label>
      <Stack spacing={2} direction="row">
      <Button  type ="submit" >Add Hotel</Button>
    </Stack>
      
      </form>

   
    </Box>
        </Box>
      </Modal>
    </div>
  );

}