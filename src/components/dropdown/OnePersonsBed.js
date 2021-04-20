import React, {useEffect, useState} from "react";
import { Card, Col, Row } from "react-bootstrap";
import useBaseUrl from '../../useBaseUrl'



const OnePersonsBed = ({productsData}) => {
  
  const baseUrl = useBaseUrl()
  
  useEffect(() => {
    

  },[])


    return (
        <>
        <div style={{margin: "20px"}}>
          <Row>
                {
                  productsData.data != null ? 
                  (
                    productsData.data.filter( (item)=> item.category === "One person bed").
                    map( item => (
                      <Col xs={12} sm="auto"  md="auto" lg="auto" >
                      <Card style={{ width: '21.8rem' }}>
                      <Card.Img variant="top" src= {`${baseUrl}/${item.imageUrl}`}/>
                      <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>
                          {item.descriptions}
                        </Card.Text>
                        <div className="price">
                          {item.price} <br/>
                        </div>
                        Sale: {item.offerPrice}
                      </Card.Body>
                      </Card>
                      </Col>
                    ))
                  ) : "Loading"
                }
        </Row>
        </div>
      </>
    )
}
export default OnePersonsBed;
