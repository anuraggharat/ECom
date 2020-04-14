import React from 'react'
import {FaHeart, FaFacebook, FaInstagram, FaTwitter} from  'react-icons/fa'
import { Link } from 'react-router-dom'
export default function Footer() {
    return (
        <footer className="bg-light">
            <div className="container-fluid border-bottom d-flex justify-content-center py-3">
            
                <Link className="mx-4 social-media-links">Find A Store</Link>
                <Link className="mx-4 social-media-links">Payment options</Link>
                <Link className="mx-4 social-media-links">Return Policy</Link>
                <Link className="mx-4 social-media-links">Terms And Conditions</Link>
            
            </div>
            <div className="row container-fluid  py-4">
                <div className="col-md-8 ">
                    <h1 className="footerlogo">ROVE</h1>
                    <p>ROVE a online shopping portal for buying shoes.</p>
                </div>
                <div className="col-md-4 d-flex justify-content-start text-center align-content-center">
                    <Link><FaFacebook className="social-media-button my-auto" /></Link>
                    <Link><FaInstagram className="social-media-button"/></Link>
                    <Link><FaTwitter className="social-media-button"/></Link>
                </div>
            </div>
            <div className="w-100 bg-dark py-2 text-center">
                <p className="text-white m-0">Designed and Developed with <FaHeart className="text-first" /> by <a className="text-primary">ANURAG_GHARAT</a> </p>
            </div>
        </footer>
    )
}
