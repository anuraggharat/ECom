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
            <div>
                {children}
            </div>
            <Footer />
        </div>
    )
}
export default Base
