import React from "react"
import {Route,Redirect} from "react-router-dom"
import isLoggedIn from "../../lib/shared/isLoggedIn"

const PrivateRoute=({component:Component,...rest})=>{
    return <Route {...rest} render={()=>{
    return isLoggedIn() ? <Component/> : <Redirect to = "/" />
    }} />
}

export default PrivateRoute;