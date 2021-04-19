import { faFileExport } from '@fortawesome/free-solid-svg-icons';
import { Button, Card, Container, makeStyles,Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core'
import React from 'react'
import TableData from './TableData';
import TopSection from './TopSection'

const useStyles = makeStyles((theme)=> ({
    root:{
        
    },
    heading:{
        color: "#383838de",
        fontSize: theme.spacing(2)
    },
    card:{
        margin: theme.spacing(5, 0),

    }

}))


const AllProducts = () => {
    const classes = useStyles();
    return (
        <Container className={classes.root} >
            <Card className={classes.card}>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell variant='head' size='small' >
                                        <Typography className={classes.heading} variant='h6'>
                                            Serial
                                        </Typography>
                                </TableCell>
                                <TableCell  size='small' >
                                        <Typography className={classes.heading} variant='h6'>
                                            Name
                                        </Typography>
                                </TableCell>
                                <TableCell size='small'>
                                        <Typography className={classes.heading} variant='h6'>
                                            Category
                                        </Typography>
                                </TableCell>
                                <TableCell size='small'>
                                        <Typography className={classes.heading} variant='h6'>
                                            Price
                                        </Typography>
                                </TableCell>
                                <TableCell size='small'>
                                        <Typography className={classes.heading} variant='h6'>
                                            Offer Price
                                        </Typography>
                                </TableCell>
                                <TableCell size='small'>
                                        <Typography className={classes.heading} variant='h6'>
                                            Photo
                                        </Typography>
                                </TableCell>
                                <TableCell size='small'>
                                        <Typography className={classes.heading} variant='h6'>
                                            Action
                                        </Typography>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody className= {classes.tblBody}>
                                <TableData/>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>
        </Container>
    )
}

export default AllProducts
