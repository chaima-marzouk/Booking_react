import react from 'react'
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import '../../../css/hotel.css'
import React, { useEffect, useState} from 'react';
import axios from 'axios';


const CardHotel = ()=>{

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([])


  useEffect(() => {
    const fetchData = async () =>{
      try {
        const {data: hotels} = await axios.get('http://localhost:8080/api/hotels/');
        setData(Object.values(hotels));
        // console.log(setId)
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }

    fetchData();
  });

    return (
      
      <div className='grid' style={{display: 'flex'}}>
        {data.map(item => (
    <Card style={{ width: '18rem' ,margin: '55px', display: 'flex'}}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>{item.name}</Card.Title>
      <Card.Text>
      {item.description}
      </Card.Text>
      <Card.Text>
      {item.stars}
      </Card.Text>
      <Button style={{backgroundColor: '#ed6c02'}}>Reserve now !</Button>
    </Card.Body>
  </Card> ))}
  </div>
    )

  
}

export default CardHotel;



