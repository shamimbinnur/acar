import React from 'react'
import { Container, Typography, MenuItem, Button, FormControl, InputLabel, Input, TextField, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme)=>({
    root:{
        display: "flex",
        justifyContent:"center"
    },
    form:{

    },
    formWrapper:{
        paddingTop: theme.spacing(5),
        maxWidth: theme.spacing(50),
    },
    textField:{
        margin: theme.spacing(0.5)
    },
    btn:{
        backgroundColor: "#2c2e83",
        margin: theme.spacing(2, 0.5)
    },
    title:{
        marginBottom: theme.spacing(5)
    }
}))

const AddProduct = () => {

    const classes = useStyles();
    return (
        <Container className={classes.root}>
            <div className={classes.formWrapper}>
                <Typography color='textSecondary' className={classes.title}  variant='h4'>
                    Add Product
                </Typography>
                <form className={classes.form} action="">
                    <TextField  className={classes.textField} fullWidth  label="Product name" variant="outlined" />
                    <TextField
                    className={classes.textField}
                    fullWidth
                    select
                    label="Category"
                    value=''
                    variant="outlined"
                    >
                        <MenuItem value='item1'>
                            iTEM1
                        </MenuItem>
                        <MenuItem  value='item2'>
                            iTEM2
                        </MenuItem>
                        <MenuItem value='item3'>
                            iTEM3
                        </MenuItem>
                    </TextField>
                    <TextField className={classes.textField} fullWidth  type="number" label="Price" variant="outlined" />
                    <TextField className={classes.textField} fullWidth  type="number" label="Offer Price" variant="outlined" />
                    
                    <Button className={classes.btn} fullWidth color='primary' variant='contained' >Add product</Button>


                </form>
            </div>
        </Container>
    )
}

export default AddProduct
