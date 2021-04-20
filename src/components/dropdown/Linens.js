import React, {useState, useEffect} from 'react';
import {Card} from 'react-bootstrap';

function Linens({productsData}) {

  const baseUrl = 'http://localhost:5000'
  const [products, setProducts] = useState({})
  let filteredArray;

  useEffect(() => {
    setProducts(productsData)
  },[])

  return (
    <>
        <div>
          <div className="col-md-12">
              <div class="card-deck img-fluid">
                {
                  productsData.data != null ? 
                  (
                    productsData.data.filter( (item)=> item.category === "Linens").
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

export default Linens
