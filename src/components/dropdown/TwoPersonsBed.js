import React, {useEffect, useState} from "react";
import { Card } from "react-bootstrap";

const baseUrl = 'http://localhost:5000'


const TwoPersonsBed = ({productsData}) => {
    return (
      <>
        <div>
          <div className="col-md-12">
              <div class="card-deck img-fluid">
                {
                  productsData.data != null ? 
                  (
                    productsData.data.filter( (item)=> item.category === "Two person bed").
                    map( item => (
                      <Card style={{ width: '10rem' }}>
                      <Card.Img variant="top" src= {`${baseUrl}/${item.imageUrl}`}/>
                      <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>
                          {item.descriptions}
                        </Card.Text>
                        <div className="price">
                          {item.price} <br/>
                        </div>
                        Sale%: {item.offerPrice}
                      </Card.Body>
                      </Card>
                    ))
                  ) : "Loading"
                }
              
              </div>
          </div>
        </div>
      </>
    )
}

export default TwoPersonsBed
