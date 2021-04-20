  
import React, { useState, useEffect } from 'react'
import Login from './Login'
import AdminPanel from './AdminPanel'
import axios from 'axios'

const Admin = () => {

    const [ isLogedin, setisLogedin ] = useState(false);

    useEffect(() => {
        verificationCheck()
    },[])

    const verificationCheck = async() =>{

        const config = {
          headers :{
            auth_token : localStorage.getItem("auth_token")
          }
        }
        const fetchedData = await axios.post('http://localhost:5000/login/verify', {}, config )
        if(fetchedData.data.message === 'true'){
          setisLogedin(true)
        }
    }

    return (
        <>
            {
                isLogedin ? <AdminPanel/> : <Login/>
            }
        </>
    )
}

export default Admin