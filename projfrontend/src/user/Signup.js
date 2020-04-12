import React from 'react'
import Base from "../core/Base"

const Signup = () => {
    const signupform=()=>{
        return(
            <div className="w-80 bg-light mx-auto signupcontainer my-5 shadow-lg">
                <div className="row">
                    <div className="col-md-7">
                        <img src="https://images.pexels.com/photos/1858407/pexels-photo-1858407.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="w-100 signuppic"></img>
                    </div>
                    <div className="col-md-5 d-flex flex-column justify-content-center text-center">
                        <div className="w-100 p-0 m-0">
                            <h1>SIGNUP</h1>
                        </div>
                        <form className="form-group px-3 w-100">
                            <label for="fname" className="mt-3">First Name</label>
                            <input className="form-control" type="text" />
                            <label for="fname"className="mt-3">Last Name</label>
                            <input className="form-control"  type="text" />
                            <label for="fname" className="mt-3">Email</label>
                            <input className="form-control" type="email"  />
                            <label for="fname" className="mt-3">Password</label>
                            <input className="form-control"  type="password"  />
                            <button className="btn-primary mx-auto mt-3">Signup</button>
                        </form>
                    </div>
                </div>
            </div>
            
        )
    }
    return (
        <Base>
            {signupform()}
        </Base>
    )
}

export default Signup