import React, { useState } from 'react'
import { Container, Typography, MenuItem, Button, FormControl, InputLabel, Input, TextField, makeStyles, InputAdornment } from '@material-ui/core'
import axios from 'axios'
import e from 'cors'
import { useBootstrapPrefix } from 'react-bootstrap/esm/ThemeProvider'

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

    const [imageFile, setImageFile] = useState('')
    const [uploadProgress, setuploadProgress] = useState(0)
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState(0)
    const [offerPrice, setofferPrice] = useState(0)

    
    

    

    const handleSubmit = (e)=> {
        e.preventDefault()
        upLoad();
    }

    const upLoad = async() => {
        console.log(imageFile)
        const formData = new FormData();
        formData.append('image', imageFile);


        const config = {
            headers :{
              auth_token : localStorage.getItem("auth_token"),
              'Content-Type': 'multipart/form-data'
            },
            onUploadProgress: progressEvent => {
                setuploadProgress(Math.round( (progressEvent.loaded * 100) / progressEvent.total ))
            }
        }

        const data = await axios.post("http://localhost:5000/admin/upload", formData, config )
        console.log(data)
    }

    const classes = useStyles();
    return (
        <Container className={classes.root}>
            <div className={classes.formWrapper}>
                {uploadProgress}
                <Typography color='textSecondary' className={classes.title}  variant='h4'>
                    Add Product
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit} >
                    <TextField  className={classes.textField} fullWidth  label="Product name" variant="outlined" />
                    <TextField
                    className={classes.textField}
                    fullWidth
                    select
                    label="Category"
                    value="d"
                    variant="outlined"
                    >
                        <MenuItem value='One person bed'>
                        One person bed
                        </MenuItem>
                        <MenuItem value='One person bed base'>
                        One person bed base
                        </MenuItem>
                        <MenuItem value='Two person bed'>
                        Two person bed
                        </MenuItem>
                        <MenuItem value='Two person bed base'>
                        Two person bed base
                        </MenuItem>
                        <MenuItem value='Bunk bed'>
                        Bunk bed
                        </MenuItem>
                        <MenuItem value='Linens'>
                        Linens
                        </MenuItem>
                        
                    </TextField>
                    <TextField className={classes.textField} fullWidth  type="number" label="Price" variant="outlined" />
                    <TextField className={classes.textField} fullWidth  type="number" label="Offer Price" variant="outlined" />
                    <Input onChange={ (e)=> setImageFile(e.target.files[0])} className={classes.textField} fullWidth  type="file" placeholder="Photo"  />
                    <Button type='submit'  className={classes.btn} fullWidth color='primary' variant='contained' >Add product</Button>
                </form>
            </div>
        </Container>
    )
}

export default AddProduct
