import React, { useEffect, useState } from "react";
// import { Card, Row, Col } from "react-bootstrap";
import "./Beds.css";
import axios from 'axios'
import useBaseUrl from '../../useBaseUrl'

import { Grid, Button, CardActions, Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  makeStyles,
 } from '@material-ui/core'

 const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function Beds({products}) {

  const baseUrl = useBaseUrl()
  const [productData, setProductData] = useState({})
  const classes = useStyles()

  useEffect(() => {
    getProducts()
  },[])

  const getProducts = async() =>{
    const {data} = await axios.get(`${baseUrl}/public/products`)
    setProductData(data)
  }

  



  return (
    <>
    <Grid container md= {12}>
          {
            productData.data != null ? 
            (
              productData.data.map( item => (
                <Grid item>
                  <Card className={classes.root}>
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image={`${baseUrl}/${item.imageUrl}`}
                        title="Contemplative Reptile"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          Lizard
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                          across all continents except Antarctica
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary">
                        Share
                      </Button>
                      <Button size="small" color="primary">
                        Learn More
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))
              ) : "Loading"
              
            }
          

      </Grid>
    </>
  );
}

export default Beds;
