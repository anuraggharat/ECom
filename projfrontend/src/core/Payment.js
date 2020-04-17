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
        error:"",
        instance:{}
    })
    const userId = isAuthenticated() && isAuthenticated().user._id
    const token = isAuthenticated() && isAuthenticated().token

    console.log(userId,token)
    const getToken =(userId,token)=>{
        getmeToken(userId,token).then(info=>{
            
            console.log("information",info)
            if(info.error){
                setInfo({...info,error:info.error})
            }else{
                const clientToken = info.clientToken
                setInfo({clientToken})
            }
        })
    }

    const showbtdropin=()=>{
        return (
            <div >
                {info.clientToken!==null && products.length>0?(<div>
                    <DropIn
                    options={{authorization:info.clientToken}}
                    onInstance={instance => (info.instance=instance)}
                    
                    />
                    <button onClick={()=>{}}>BUY</button>
                </div>):(<h3>Please Log in</h3>)}
            </div>
        )
    }

    useEffect(()=>{getToken(userId,token)}

    ,[])

    return (
        <div>
            {showbtdropin()}
        </div>
    )
}
export default Payment