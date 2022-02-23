import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

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

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button sx={{ color: "white", marginLeft:"30px"}} onClick={handleOpen} variant="contained" color="success">Add</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"

        
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add: 
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
        <form action='' method=''>
      <TextField id="outlined-basic" sx={{marginBottom:"20px", width:"80%"}} label="Please enter Name" variant="outlined" />
      <TextField id="outlined-basic" sx={{marginBottom:"20px", width:"80%"}} label="Please enter @Email" variant="outlined" />
      <TextField id="outlined-basic" sx={{marginBottom:"20px", width:"80%"}} label="Please enter " variant="outlined" />
      <TextField id="outlined-basic" sx={{marginBottom:"20px", width:"80%"}} label="Please enter " variant="outlined" />
      <Stack spacing={2} direction="row">
      <Button variant="outlined">Add ..</Button>
    </Stack>
      
      </form>
    </Box>
        </Box>
      </Modal>
    </div>
  );
}

