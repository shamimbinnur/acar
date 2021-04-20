import React, { useEffect, useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import "./Beds.css";
import axios from 'axios'
import useBaseUrl from '../../useBaseUrl'

function Beds({products}) {

  const baseUrl = useBaseUrl()
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
    <div style={{margin: "20px"}}>
    <Row>
          {
            productData.data != null ? 
            (
              productData.data.map( item => (
                <Col xs="auto" sm="auto"  md="auto" lg="auto" >
                <Card style={{ width: "21.8rem" }}>
                  <Card.Img
                    variant="top"
                    src={`${baseUrl}/${item.imageUrl}`}
                  />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text> {item.descriptions}</Card.Text>
                    <div className="price">
                      Price: {item.price} <br />
                    </div>
                    Sale: {item.offerPrice}₺
                  </Card.Body>
                </Card>
              </Col>
              ))
              ) : "Loading"
              
            }
          

      </Row>
      </div>
        
    </>
  );
}

export default Beds;
