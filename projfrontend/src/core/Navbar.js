import React from 'react'
import {Link,withRouter, useHistory} from 'react-router-dom'
import {GiRunningShoe} from 'react-icons/gi'
import { signout,isAuthenticated } from '../auth/helper'
import { FaSignOutAlt } from 'react-icons/fa'



const currentTab = (window,path)=>{
    if(window.location.pathname === path){
        return {color:"#FF0073"}
    }
    else{
        return {color:"#000"}
    }
}


const Navbar = () => {
    const history = useHistory()
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a>
            <h1 className="logo"><span>ROVE</span><GiRunningShoe /></h1>
            </a>
            <ul className="nav navbar-nav ml-auto">
                <li className="nav-link" >
                    <Link to="/" style={currentTab(window,"/")}>Home</Link>
                </li>
                <li className="nav-link">
                    <Link to="/" style={currentTab(window,"/shop")}>Shop</Link>
                </li>
                <li className="nav-link">
                    <Link to="/" style={currentTab(window,"/dashboard")}>Account</Link>
                </li>
                <li className="nav-link">
                    <Link to="/" style={currentTab(window,"/about")}>About</Link>
                </li>
                {!isAuthenticated() && (
                    
                <li className="nav-link">

                    
                <button className="btn-primary mr-2">
                    <Link to="/signin" >Login</Link>
                </button>
                </li >
                )}
                {isAuthenticated() && (
                    <li  className="nav-link">
                    <button className="btn btn-primary" onClick={()=>{
                        signout(()=>{
                            history.push("/")
                        })
                    }}>
                        <FaSignOutAlt />
                    </button>
                </li>
            
                )}
                
                
            </ul>
            
        </nav>
        )
}
export default withRouter(Navbar)