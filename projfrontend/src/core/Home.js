import React from 'react'
import {API} from '../backend'
import Base from '../core/Base'
import {  FaArrowRight } from 'react-icons/fa'
export default function Home() {
    console.log("API IS ",API)
    return (
        <Base>
        <div className="container-fluid landing">
            <div className="row">
                <div className="col-sm-6 d-flex flex-column justify-content-around align-content-center h-100 pt-5">
                    <h1 className="mt-5">Lead The way</h1>
                    <h1>with <span className="landinglogo">ROVE</span></h1>
                    <p>Get the latest collection of sneakers and sports shoes with finest material engineered for better performance and resistance.Check out latest products at great prices now!</p>
                    <button className="btn-landing">Store<FaArrowRight /></button>
                </div>
                <div className="col-sm-6">
                </div>
            </div>
        </div>
        </Base>
        
    )
}
