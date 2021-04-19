import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import "./Beds.css";
import axios from 'axios'

function Beds({products}) {

  const baseUrl = 'http://localhost:5000'
  const [productData, setProductData] = useState({})

  useEffect(() => {
    getProducts()
  },[])

  const getProducts = async() =>{
    const {data} = await axios.get(`${baseUrl}/public/products`)
    setProductData(data)
  }



  return (
    <>
      <div className="col-md-12">
        <div class="card-deck">
          {
            productData.data != null ? 
            (
              productData.data.map( item => (
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={`${baseUrl}/${item.imageUrl}`}
                />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text> {item.category}</Card.Text>
                  <div className="price">
                    Price: {item.price} <br />
                  </div>
                  Sale: {item.offerPrice}₺
                </Card.Body>
              </Card>
            ))
            ) : "Loading"
           
          }
          
        
        </div>
      </div>
    </>
  );
}

export default Beds;
