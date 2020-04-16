import React, { useState } from 'react'
import { FaCartPlus } from 'react-icons/fa'
import ImageHelper from './helper/imagehelper'
import {MdRemoveShoppingCart} from 'react-icons/md'
import { Redirect } from 'react-router-dom'
import { addItemToCart, removeItemFromCart } from './helper/carthelper'

const Card = ({product,
    className,
    removeFromCart,
    addtoCart,
    setReload = f => f,
    //   function(f){return f}
    reload = undefined
}) => {

    const [redirect, setRedirect] = useState(false)

    const [count, setcount] = useState(product.count)
    
    const addToCart=()=>{
        addItemToCart(product,()=>{
            setRedirect(true)
        })

    }
    const showAddToCart=addtoCart=>{
        return(addtoCart && <button className="btn bg-transparent" onClick={addToCart}>
            <FaCartPlus className="text-success" />
        </button>) 
        
    }
    const showRemoveFromCart=(removeFromCart)=>{
        return (removeFromCart && 
        <button className="btn bg-transparent" onClick={()=>{removeItemFromCart(product._id);
        setReload(!reload)}}>
        <MdRemoveShoppingCart />
    </button>)
       
    }


    const getARedirect = (redirect)=>{

    if(redirect){
        return <Redirect to="/cart" />
    }
    
    }

    console.log(product);
    

    return (
        <div  className={className}>
            <ImageHelper id={product._id} />            
            <div className="card-body py-2">
    <h4 className="card-title mb-0">{product.name}</h4>
    <small className="card-text mt-0 text-muted">{product.description}</small>
                <div className="w-100 p-2 d-flex justify-content-between">
    <h5 className="text-muted">₹ {product.price}</h5>
                
    {getARedirect(redirect)}
                <h5>{showRemoveFromCart(removeFromCart)}</h5>
                <h5>{showAddToCart(addtoCart)}</h5>
                </div>
            </div>
        </div>
    )
}

export default Card