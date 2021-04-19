import { Container, Button, Typography, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme)=>({
    root:{
        display: 'flex',
        justifyContent: 'center'
    },
    wrapper:{
        display: "flex",
        flexDirection: "column",
        maxWidth: theme.spacing(100),
        marginTop: theme.spacing(5)
    },
    title:{
        margin: theme.spacing(5),
        fontSize: theme.spacing(3)
    }
}))

const AdminSettings = () => {
    const classes = useStyles()

    return (
        <Container className={classes.root}>
            <div className={classes.wrapper} >
                <Typography className={classes.title} color='textSecondary' variant='h1'>
                    Want to change admin password ?
                </Typography>
                <Button size="small" fullWidth variant='outlined'>
                    Change Password
                </Button>
            </div>
        </Container>
    )
}

export default AdminSettings
