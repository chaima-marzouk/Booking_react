import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select' ;
import React, {useState, useEffect}  from 'react';
import axios from 'axios';


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
  

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const [name, setEmail] = useState('')
  const [description, setDescription] = useState('')
  const [stars, setStars] = useState('')
  const [coverImage, setCoverImage] = useState('')

  function handlEmail(e){
    setEmail(e.target.value)
  }
  function handlDescription(e){
    setDescription(e.target.value)
  }
  function handlStars(e){
    setStars(e.target.value)
  }
  function handelCoverImage(e){
    setCoverImage(e.target.files[0])
  }


  const handleSubmit = e => {

    const coverImageName = coverImage.name;
    const data = { name : name, description : description, stars : stars, imageCover : coverImageName };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    };
    console.log(coverImage.name)
    fetch("http://localhost:8080/api/hotels/hotel", requestOptions)
    .then(response => response.json())
    .then(res => console.log(res));
    e.preventDefault();
    setOpen(false)

  };

 

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
          <Box
      component="form"
      sx={{
        
      }}
      noValidate
      autoComplete="off"
    >


          <form>

      <TextField id="outlined-basic" sx={{marginBottom:"20px", width:"80%"}} value={name} onChange={handlEmail} label="Please enter hotel Name" name='name'  />
      <TextField id="outlined-basic" sx={{marginBottom:"20px", width:"80%"}}  value={description} onChange={handlDescription} label="Please enter Descreption " name='description'  />
      
    
      <FormControl fullWidth>
  <InputLabel id="outlined-basic">Stars</InputLabel>
  <Select Id="outlined-basic" sx={{marginBottom:"20px", width:"80%"}} 
  value={stars} onChange={handlStars}
  id="outlined-basic"  name='stars' label="Age" >
    <MenuItem value={1}>⭐</MenuItem>
    <MenuItem value={2}>⭐⭐</MenuItem>
    <MenuItem value={3}>⭐⭐⭐</MenuItem>
    <MenuItem value={4}>⭐⭐⭐⭐</MenuItem>
    <MenuItem value={5}>⭐⭐⭐⭐⭐</MenuItem>
    </Select>
  </FormControl>

   <Button variant="contained"  sx={{margin:"10px 10px 10px 10px", width:"30%",backgroundColor:"#F44336"}} component="label"> Cover Image
    <input type="file"  onChange={handelCoverImage}  accept="image/*" hidden/>
    </Button>

   <Button variant="contained"  sx={{margin:"10px 10px 10px 10px", width:"30%"}}  component="label">  Images Hotel 
    <input type="file" multiple   accept="image/*" hidden  />
    </Button>
    
      <label htmlFor="icon-button-file">
        <Input accept="image/*" id="icon-button-file" type="file" />
        <IconButton color="primary" aria-label="upload picture" component="span"></IconButton>
      </label>
      <Stack spacing={2} direction="row">
      <Button  type ="button" onClick={handleSubmit} >Add Hotel</Button>
    </Stack>
      
    </form>

   
    </Box>
        </Box>
      </Modal>
    </div>
  );

}