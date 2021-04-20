import React,{useState, useEffect} from 'react'
import { Button, Card, Container, makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core'
import useBaseUrl from '../../useBaseUrl'

const useStyles = makeStyles((theme)=> ({
    root:{

    },
    heading:{

    },
    tblCell:{
        fontSize: theme.spacing(2)
    }

}))


const TableData = ({productData})=> {
    const [data, setData] = useState()
    const classes = useStyles()
    const baseUrl = useBaseUrl()

    useEffect(() => {

    },[])


    return (
        <>
                {
                    productData.data && (
                        productData.data.map((item, i) =>(
                            <>
                            <TableRow>
                            <TableCell size='small'>
                            <Typography className={classes.tblCell} variant='h5'>
                                                {i+1}
                            </Typography>
                            </TableCell>
                            <TableCell size='small'>
                                <Typography className={classes.tblCell} variant='h5'>
                                                    {item.name}
                                </Typography>
                            </TableCell>
                            <TableCell size='small'>
                                <Typography className={classes.tblCell} variant='h5'>
                                                    {item.category}
                                </Typography >
                            </TableCell>
                            <TableCell size='small' >
                                <Typography className={classes.tblCell} variant='h5'>
                                                    {item.price}
                                </Typography>
                            </TableCell>
                            <TableCell size='small' >
                                <Typography className={classes.tblCell} variant='h5'>
                                                    {item.offerPrice}
                                </Typography>
                            </TableCell>
                            <TableCell size='small' className={classes.tblCell}>
                                <div style={{width:"50px", height:"auto"}} >
                                    <img style={{width:"100%", height:"auto"}} src={ `${baseUrl}/${item.imageUrl}` } alt=""/>
                                </div>
                            </TableCell>
                            <TableCell size='small' >
                                <Button size='small'>
                                                    Edit
                                </Button>
                            </TableCell>
                            </TableRow>
                            </>
                        ))
                    ) 
                }
            
        </>
    )
}

export default TableData
