

import Button from '@mui/material/Button';
import { Table } from '@mui/material';
import React, { useEffect, useState} from 'react';
import axios from 'axios';
import UpdateModal from './update_hotel_modal'
const MyComponent = () => {

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([])


  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

const onDelete = (id) => {
  axios.delete(`http://localhost:8080/api/hotels/delete/${id}`)
 
    const fetchData = async () =>{
      try {
        const {data: hotels} = await axios.get('http://localhost:8080/api/hotels/');
        setData(Object.values(hotels));
      } catch (error) {
        console.error(error.message);
      }
    }

    fetchData() ;
 

}

  useEffect(() => {
    const fetchData = async () =>{
      try {
        const {data: hotels} = await axios.get('http://localhost:8080/api/hotels/');
        setData(Object.values(hotels));
        // console.log(hotels)
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }

    fetchData();
  });

  return (
    <div>
    {loading && <div>Loading</div>}
    {!loading && (
      <div>
        <h2>ALL Hotels</h2>
      </div>
    )}

<Table striped bordered hover>
  <thead>
    <tr>
      <th>ID</th>
      <th> Hotel Name</th>
      <th>Stars</th>
      <th>Descreption </th>
      <th>Setting </th>
    </tr>
  </thead>
  <tbody> 
  {data.map(item => ( <tr><td>{item.id}</td>
  <td>{item.name}</td>
   <td>{item.stars}</td>
   <td>{item.description}</td>
   <td><Button sx={{ color: "white", backgroundColor: "red"}} variant="contained"  onClick={() => onDelete(item.id)}>Delete</Button> 
   <Button sx={{ color: "white", marginLeft:"20px"}} onClick={() => setOpen(true) } variant="contained" color='primary'>Update</Button></td>
   {open && <UpdateModal open={open} setOpen={setOpen}  setOpen={setOpen}/> }
   </tr> ))}
  </tbody>
</Table>

    </div>
  )
}

export default MyComponent;


    
