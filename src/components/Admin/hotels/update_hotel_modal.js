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

export default function BasicModal({open, setOpen, hotelId}) {
 
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [stars, setStars] = useState('')

  const [loading, setLoading] = useState(true);
 
  const [fName, setfName] = useState('');

  const handleClose = () => {
    setOpen(!open);
  };

 

  function handlName(e){
    setName(e.target.value)
  }
  function handlDescription(e){
    setDescription(e.target.value)
  }
  function handlStars(e){
    setStars(e.target.value)
  }



  const edit = e => {
    e.preventDefault();

    const data = { name, description, stars };
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    };
    fetch(`http://localhost:8080/api/hotels/edit/${hotelId}`, requestOptions)
      .then(response => response.json())
      .then(res => console.log(res));

      setOpen(!open)

  };

  const [data, setData] = useState({})



  useEffect(() => {
    const fetchData = async () =>{
      try {
        const res = await axios.get(`http://localhost:8080/api/hotels/hotel/${hotelId}`);
        const test = res.data
        setData(test);

    } catch (error) {
        console.error(error.message);
    }
    setLoading(false);
}

fetchData();
});


const [values, setValues] = useState({
  name: "",
  stars: "",
  description: ""
});
const handleChange = e => {
  setValues({
    ...values,
    [e.target.name]: e.target.value
  });
};

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        onClose={handleClose} 
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

      <TextField id="outlined-basic" sx={{marginBottom:"20px", width:"80%"}} onChange={(e) => handlName(e)} label={data.name}  name='name' />
      <TextField id="outlined-basic"  sx={{marginBottom:"20px", width:"80%"}}  label={data.description} onChange={(e) =>handlDescription(e)}  name='description'  />
      
    
      <FormControl fullWidth>
            <InputLabel id="outlined-basic">Stars</InputLabel>
            <Select Id="outlined-basic" sx={{marginBottom:"20px", width:"80%"}} 
                 value={data.stars} onChange={(e) =>handlStars(e)} 
                id="outlined-basic"  name='stars'  >
                    <MenuItem value={1}>???</MenuItem>
                    <MenuItem value={2}>??????</MenuItem>
                    <MenuItem value={3}>?????????</MenuItem>
                    <MenuItem value={4}>????????????</MenuItem>
                    <MenuItem value={5}>???????????????</MenuItem>
            </Select>
      </FormControl>

   <Button variant="contained"  sx={{margin:"10px 10px 10px 10px", width:"30%",backgroundColor:"#F44336"}}  component="label"> Image Cover 
    <input type="file"  accept="image/*" hidden/>
    </Button>

   <Button variant="contained"  sx={{margin:"10px 10px 10px 10px", width:"30%"}}  component="label">  Images Hotel 
    <input type="file" multiple   accept="image/*" hidden  />
    </Button>

      <label htmlFor="icon-button-file">
        <Input accept="image/*" id="icon-button-file" type="file" />
        <IconButton color="primary" aria-label="upload picture" component="span">
         
        </IconButton>
      </label>
      <Stack spacing={2} direction="row">
      <Button type ="submit" onClick={edit} >Edit Hotel</Button>
    </Stack>
      
    </form>

   

    </Box>
        </Box>
      </Modal>
    </div>
  );

}