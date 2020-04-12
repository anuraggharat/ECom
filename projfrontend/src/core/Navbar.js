import React from 'react'
import {Link,withRouter} from 'react-router-dom'
import {GiRunningShoe} from 'react-icons/gi'
const currentTab = (window,path)=>{
    if(window.location.pathname === path){
        return {color:"#FF0073"}
    }
    else{
        return {color:"#000"}
    }
}


const Navbar = () => {
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
                <button className="btn-login mr-2">
                    <Link to="/" >Login</Link>
                </button>
                <button className="btn-signup mr-2">
                    <Link to="/">Signup</Link>
                </button>
                
            </ul>
            
        </nav>
        )
}
export default withRouter(Navbar)