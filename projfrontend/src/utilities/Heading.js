import React from 'react'

export default function Heading({title,subtitle}) {
    return (
        <div className="jumbotron text-center text-muted">
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
        </div>
    )
}
