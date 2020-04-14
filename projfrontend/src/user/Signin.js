import React, { useState } from 'react'
import Base from "../core/Base"
import { Link,Redirect } from 'react-router-dom'

import {signin,authenticate,isAuthenticated} from "../auth/helper"

const Signin = () => {

    const [values,setValues] = useState({
        email:"",
        password:"",
        error:"",
        loading:false,
        didRedirect:false
    })
     
    const {email,password,error,loading,didRedirect} = values
    const {user} = isAuthenticated()
    const handleChange=name=>event=>{
        setValues({...values,error:false,[name]:event.target.value})
    }
    const onSubmit = event=>{
        event.preventDefault();
        setValues({...values,error:false,loading:true})
        signin({email,password})
            .then(data=>{
                if(data.error){
                    setValues({...values,error:data.error,loading:true})
                }
                else{
                    authenticate(data,()=>{
                        setValues({...values,didRedirect:true})
                    })
                }
            })
            .catch(console.log("signin request failed")
            )
    }
    const performRedirect=()=>{
        if(didRedirect){
            if(user && user.role===1){
                return <p>Redirect to admin</p>
            }  
            else{
                return <p>Redirect to usert</p>
            }
        }
        if(isAuthenticated()){
            return <Redirect to="/" />
        }
    }
    const loadingMessage =()=>{
        return (
            loading && (
                <div className="alert alert-info">
                    <h2>loading</h2>
                </div>
            )
        )
    }
    const errorMessage =()=>{
        return (
            <div className="alert alert-danger" style={{display:error ? "":"none"}}>
            {error}
        </div>
        )

        
    }
    const signinform=()=>{
        return(
            <div className="w-80 bg-light mx-auto signupcontainer my-5 shadow-lg">
                <div className="row">
                    <div className="col-md-7 p-0 m-0">
                        <img src="https://images.pexels.com/photos/1102776/pexels-photo-1102776.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="signuppic"></img>
                        <div className="layer bg-secondary text-center d-flex flex-column justify-content-center">
                            
                        </div>
                    </div>
                    <div className="col-md-5 d-flex flex-column justify-content-center text-center">
                        <div className="w-100 p-0 m-0">
                            <h1>SIGNIN</h1>
                        </div>
                        <form className="form-group px-3 w-100" onSubmit={onSubmit}>
                            <label for="fname" className="mt-3">Email</label>
                            <input onChange={handleChange("email")} className="form-control" type="email" value={email} />
                            <label for="fname" className="mt-3">Password</label>
                            <input onChange={handleChange("password")} className="form-control"  type="password" value={password} />
                            <button className="btn-secondary mx-auto mt-3 " type="submit">Signin</button>
                            {loadingMessage()}
                            {errorMessage()}
                        </form>
                        <div className="w-100">
                            <p>New to ROVE?<Link> Create a Account</Link></p>
                        </div>
                    </div>

                </div>
            </div>
            
        )
    }
    return (
        <Base>
            {signinform()}
        </Base>
    )
}

export default Signin