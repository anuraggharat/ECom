import React from 'react'
import Base from "../core/Base"
import { Link } from 'react-router-dom'

const Signin = () => {
    const signinform=()=>{
        return(
            <div className="w-80 bg-light mx-auto signupcontainer my-5 shadow-lg">
                <div className="row">
                    <div className="col-md-7 p-0 m-0">
                        <img src="https://images.pexels.com/photos/1102776/pexels-photo-1102776.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="signuppic"></img>
                        <div className="layer bg-secondary text-center d-flex flex-column justify-content-center">
                            <p className="display-4">Shoes for Everyday!</p>
                        </div>
                    </div>
                    <div className="col-md-5 d-flex flex-column justify-content-center text-center">
                        <div className="w-100 p-0 m-0">
                            <h1>SIGNIN</h1>
                        </div>
                        <form className="form-group px-3 w-100">
                            <label for="fname" className="mt-3">Email</label>
                            <input className="form-control" type="email"  />
                            <label for="fname" className="mt-3">Password</label>
                            <input className="form-control"  type="password"  />
                            <button className="btn-secondary mx-auto mt-3 ">Signin</button>
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