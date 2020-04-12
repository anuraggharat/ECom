import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
const Base = ({
    title="My title",
    description="My description",
    children
}) => {
    return (
        <div className="full-page m-0 p-0">
            <Navbar />


            <div className="container-fluid">
                <div className="jumbotron bg-dark text-white text-center">
                    <h2 className="display-4">My title</h2>
                    <p className="lead">My description</p>
                </div>
            </div>
            <div>
                {children}
            </div>
            <Footer />
        </div>
    )
}
export default Base
