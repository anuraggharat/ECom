import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from "./core/Home"
import Signup from './user/Signup'
import Signin from './user/Signin'
import AdminRoute from './auth/helper/AdminRoutes'
import PrivateRoute from './auth/helper/PrivateRoutes'
import UserDashboard from "./user/UserDashBoard"
import AdminDashboard from "./user/AdminDashBoard"
import AddCategory from './admin/AddCategory'
import ManageCategories from './admin/ManageCategories'
import  AddProduct  from './admin/AddProduct'





export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/signup" exact component={Signup}></Route>
                <Route path="/signin" exact component={Signin}></Route>
                
                <PrivateRoute path="/user/dashboard" exact component={UserDashboard} />
                <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />
                <AdminRoute path="/admin/create/category" exact component={AddCategory} />
                <AdminRoute path="/admin/categories" exact component={ManageCategories} />
                <AdminRoute path="/admin/create/product" exact component={AddProduct} />
            </Switch>
        </Router>
    )
}
