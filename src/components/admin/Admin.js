  
import React from 'react'
import Login from './Login'
import AdminPanel from './AdminPanel'

const Admin = ({isLogedin}) => {
    return (
        <>
            {
                isLogedin ? <AdminPanel/> : <Login/>
            }
        </>
    )
}

export default Admin