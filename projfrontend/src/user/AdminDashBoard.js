import React from 'react'
import Base from '../core/Base'
import { FaUserSecret } from 'react-icons/fa'
import { isAuthenticated } from '../auth/helper'
import { Link } from 'react-router-dom'




const AdminDashboard = () => {

    const {user:{name,email,role,lastname}}=isAuthenticated();


    return (
        <Base>
           <div className="container-fluid py-5">
                <div className="container bg-light">
                    <div className="jumbotron text-center">              
                        <h1>ADMIN PORTAL <FaUserSecret /> </h1>
                        <h2>Welcome Mr.{name}</h2>
                    </div>
                    <div className="container-fluid py-3">
                        <nav className="bg-dark p-3 nav nav-pills flex-column justify-content-around flex-sm-row">
                            <Link to="/admin/create/product">Add a new Product</Link>
                            <Link>Update a Product</Link>
                            <Link to="/admin/create/category">Add a category</Link>
                            <Link to="/admin/categories">Manage Category</Link>
                            <Link>All Orders</Link>
                        </nav>
                    </div>
                    <div className="container-fluid row">
                        <div className="col-sm-4  text-muted py-4 border-right"> 
                            <h6>Name:</h6>
                            <h5>{name}</h5>

                            <h6>LastName:</h6>
                            <h5>Gharat</h5>

                            <h6>Email:</h6>
                            <h5>{email}</h5>
                        </div>
                        <div className="col-sm-8 text-center align-content-center">
                            Some random charts here
                        </div>
                    </div>
                </div>
                    
           </div>
        </Base>
    )
}

export default AdminDashboard
