import React from 'react'

const Base = ({
    title="My title",
    description="My description",
    children
}) => {
    return (
        <div>
            <div className="container-fluid">
                <div className="jumbotron bg-dark text-white text-center">
                    <h2 className="display-4">My title</h2>
                    <p className="lead">My description</p>
                </div>
            </div>
            <div>
                {children}
            </div>
            <footer className="footer bg-dark mt-auto py-3">
                <div className="container-fluid">
                    footer
                </div>
            </footer>
        </div>
    )
}
export default Base
