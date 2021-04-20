import React, {useState, useEffect} from 'react';
import {Card, Row, Col} from 'react-bootstrap';
import useBaseUrl from '../../useBaseUrl'

function Linens({productsData}) {

  const baseUrl = useBaseUrl();
  const [products, setProducts] = useState({})
  let filteredArray;

  useEffect(() => {
    setProducts(productsData)
  },[])

  return (
    <>
        <div style={{margin: "20px"}}>
          <Row>
                {
                  productsData.data != null ? 
                  (
                    productsData.data.filter( (item)=> item.category === "Linens").
                    map( item => (
                      <Col xs={12} sm="auto"  md="auto" lg="auto"  >
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

export default Linens
