import React from 'react'
import { Button, Card, Container, makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme)=> ({
    root:{

    },
    heading:{

    },
    tblCell:{
        fontSize: theme.spacing(2)
    }

}))


const TableData = ()=> {
    const classes = useStyles()

    return (
        <>
            <TableRow>
            <TableCell size='small'>
                <Typography className={classes.tblCell} variant='h5'>
                                    01
                </Typography>
            </TableCell>
            <TableCell size='small'>
                <Typography className={classes.tblCell} variant='h5'>
                                    Aesome product name
                </Typography>
            </TableCell>
            <TableCell size='small'>
                <Typography className={classes.tblCell} variant='h5'>
                                    Awesome product catergory
                </Typography >
            </TableCell>
            <TableCell size='small' >
                <Typography className={classes.tblCell} variant='h5'>
                                    450
                </Typography>
            </TableCell>
            <TableCell size='small' >
                <Typography className={classes.tblCell} variant='h5'>
                                    400
                </Typography>
            </TableCell>
            <TableCell size='small' className={classes.tblCell}>
                <div style={{width:"50px", height:"auto"}} >
                    <img style={{width:"100%", height:"auto"}} src="https://source.unsplash.com/random/" alt=""/>
                </div>
            </TableCell>
            <TableCell size='small' >
                <Button size='small'>
                                    Edit
                </Button>
            </TableCell>
            </TableRow>
        </>
    )
}

export default TableData
