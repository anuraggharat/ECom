import React from 'react'
import { API } from '../../backend'

const ImageHelper = (id) => {
    console.log(id)
    return (
        <>
            <img src={`${API}product/photo/${id.id}`}
             className="card-img-top cardheight"/>
        </>
    )
}
export default ImageHelper