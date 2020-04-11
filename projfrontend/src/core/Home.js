import React from 'react'
import {API} from '../backend'

export default function Home() {
    console.log("API IS ",API)
    return (
        <div>
            <h1>hello front end</h1>
            <button className="btn btn-danger"> hi</button>
        </div>
    )
}
