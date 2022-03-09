

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
        const hotels = await axios.get('http://localhost:8080/api/hotels/');
        console.log(hotels)
        setData(Object.values(hotels));
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }
    

    fetchData();
  }, []);

  const Update = (e) =>{
    e.preventDefault();
    const hotel = {
      name : this.state.name,
      stars : this.state.stars,
      description : this.description
    }

    axios.put('http://localhost:8080/api/hotels', hotel)
     .then(res => console.log(res.data));
  }

  const onDelete = (id) => {
    axios.delete(`http://localhost:8080/api/hotels/delete/${id}`)
   
  }

  
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
  {data.map(item=> {
     <tr>
  <td>{item.id}</td>
  <td>{item.name}</td>
   <td>{item.stars}</td>
   <td>{item.description}</td>
   <td><Button onClick={() => onDelete(item.id)}>Delete</Button>
   <button onClick={Update}>Update</button></td></tr> 
   })}
  </tbody>
</Table>

    </div>
  )
}

export default MyComponent;


    
