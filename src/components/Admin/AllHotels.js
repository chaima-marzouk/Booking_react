

import Button from '@mui/material/Button';
import { Table } from '@mui/material';
import React, { useEffect, useState} from 'react';
import axios from 'axios';

const MyComponent = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () =>{
      setLoading(true);
      try {
        const {data: hotels} = await axios.get('http://localhost:8080/api/hotels');
        setData(hotels);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }
    

    fetchData();
  }, []);

  
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
   <td><button>Delete</button> <button>Update</button></td></tr> ))}
  </tbody>
</Table>

    </div>
  )
}

export default MyComponent;


    
