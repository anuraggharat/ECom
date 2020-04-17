import React,{useEffect,useState} from 'react'
import { loadCart,cartEmpty } from './helper/carthelper'
import { Link } from 'react-router-dom'
import { getmeToken, processPayment } from './helper/paymenthelper'
import {createOrder} from "./helper/orderhelper"
import { isAuthenticated } from '../auth/helper'
import DropIn from "braintree-web-drop-in-react"


const Payment = ({products,setReload=f=>f,reload=undefined}) => {
    
    const [info,setInfo] = useState({
        loading:false,
        success:false,
        clientToken:null,
        error:""
    })
    const userId = isAuthenticated() && isAuthenticated().user._id
    const token = isAuthenticated() && isAuthenticated().token


    const getToken =(userId,token)=>{
        getmeToken(userId,token).then(info=>{
            console.log(info)
            
            if(info.error){
                setInfo({...info,error:info.error})
            }else{
                const clientToken = info.clientToken
                setInfo({clientToken})
            }
        })
    }

    useEffect(()=>{getToken(userId,token)}

    ,[])

    return (
        <div>
            Brain tree
        </div>
    )
}
export default Payment