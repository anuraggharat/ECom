import React,{useState,useEffect} from 'react'
import {API} from '../backend'
import Base from '../core/Base'
import Img from "../images/main.png"
import {  FaArrowRight } from 'react-icons/fa'
import Card from './Card'
import { getProducts } from './helper/coreapicalls'


export default function Home() {
    
    const [products, setProducts] = useState([])
    const [error,setError]=useState(false);

    const loadAllProducts=()=>{
        getProducts().then(data=>{
           
            if(data.error){
                console.log(data.error)

            }else{
                setProducts(data)
                console.log(products)
                
            }
        })
    
    }
    useEffect(()=>{
        loadAllProducts()
    },[])

    return (
        <Base>
        <div className="container-fluid landing">
            <div className="row">
                <div className="col-sm-6 d-flex flex-column pt-5 pl-5 landingtext">
                    <h1 className="mt-5 p-1">Lead the way</h1>
                    <h1 className=" p-1">with <span className="landinglogo">ROVE</span></h1>
                    <p className="lead text-muted mt-3">Get the latest collection of sneakers and sports shoes with finest material engineered for better performance and resistance.Check out latest products at great prices now!</p>
                    <button className="btn-landing mx-auto mt-3">Store<FaArrowRight /></button>
                </div>
                <div className="col-sm-6 pt-5 text-center">
                    <img src={Img} className="mainimg"></img>
                </div>
            </div>
        </div>
        <div className="container bg-white mx-auto ">
            <div className="row">
                <h1>Featured shoes</h1>
            </div>
            <div className="row justify-content-around">

                {products.map(product=>{
                    return(
                        <Card key={product._id} product={product} removeFromCart={true}
                        addtoCart={false} className="card w-100 bg-light col-3 border-0 shadow-lg p-0 mx-1 my-3 h-100"/>
                    )
                })}

                    
              
            </div>
            
        </div>
        </Base>
        
    )
}
