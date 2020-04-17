import React,{useState,useEffect} from 'react'
import { isAuthenticated } from '../auth/helper'
import { cartEmpty, loadCart } from './helper/carthelper'
import { Link } from 'react-router-dom'
import StripeCheckoutButton from 'react-stripe-checkout'
import { API } from '../backend'
import { createOrder } from './helper/orderhelper'

const StripeCheckout=({
    products,
    setReload=f=>f,
    reload=undefined
})=> {

    const [data,setData] = useState({
        loading:false,
        success:false,
        error:"",
        address:""
    })
    console.log(products)
    const token = isAuthenticated() && isAuthenticated().token
    const userId = isAuthenticated() && isAuthenticated().user._id

    const getFinalPrice =()=>{
        let amount=0
        products.map(p=>{
            amount = amount + p.price
        })
        return amount
    }
    const makePayment=(token)=>{
        const body={
            token,
            products
        }
        const headers={
            "Content-Type":"application/json"
        }
        return fetch(`{$API}stripepayment`,{
            method:"POST",
            headers,
            body:JSON.stringify(body)
        }).then(response=>{
            console.log(response);
            
        }).catch(err=>console.log(err))
    }
    const showStripeButton=()=>{
        return isAuthenticated() ? (
            <StripeCheckoutButton 
                stripeKey="pk_test_RwZj7L2JiUP3ukOyLQxFvbcN00sm0q18zR"
                token={makePayment}
                amount={getFinalPrice()*100}
                name="Make a Payment"
                shippingAddress
                billingAddress
            >
                            <button className="btn btn-outline-success">
                Pay now
            </button>
            </StripeCheckoutButton>

        ) : (<Link to="/signin">Signin</Link>)
    }
    return (
        <div>
            {getFinalPrice()}
            {showStripeButton()}
        </div>
    )
}
export default StripeCheckout