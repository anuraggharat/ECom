import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from "./core/Home"
import Signup from './user/Signup'
import Signin from './user/Signin'
import AdminRoute from './auth/helper/AdminRoutes'
import PrivateRoute from './auth/helper/PrivateRoutes'
import UserDashboard from "./user/UserDashBoard"
import AdminDashboard from "./user/AdminDashBoard"




export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/signup" exact component={Signup}></Route>
                <Route path="/signin" exact component={Signin}></Route>
                
                <PrivateRoute path="/user/dashboard" exact component={UserDashboard} />
                <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />
            </Switch>
        </Router>
    )
}
