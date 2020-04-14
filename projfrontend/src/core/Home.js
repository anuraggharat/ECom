import React from 'react'
import {API} from '../backend'
import Base from '../core/Base'
import Img from "../images/main.png"
import {  FaArrowRight } from 'react-icons/fa'
export default function Home() {
    console.log("API IS ",API)
    return (
        <Base>
        <div className="container-fluid landing">
            <div className="row">
                <div className="col-sm-6 d-flex flex-column pt-5 pl-5 landingtext">
                    <h1 className="mt-5 p-1">Lead the way</h1>
                    <h1 className=" p-1">with <span className="landinglogo">ROVE</span></h1>
                    <p className="lead text-muted mt-3">Get the latest collection of sneakers and sports shoes with finest material engineered for better performance and resistance.Check out latest products at great prices now!</p>
                    <button className="btn-landing mx-auto mt-3">Store<FaArrowRight /></button>
                </div>
                <div className="col-sm-6 pt-5 text-center">
                    <img src={Img} className="mainimg"></img>
                </div>
            </div>
        </div>
        </Base>
        
    )
}
