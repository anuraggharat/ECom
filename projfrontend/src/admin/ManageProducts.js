import React,{useState,useEffect} from 'react'
import Base from '../core/Base'
import {Link} from "react-router-dom"
import { isAuthenticated } from '../auth/helper'
import { getAllProducts,deleteProduct } from './helper/adminapicall'
import Heading from '../utilities/Heading'
import { GiPencil } from 'react-icons/gi'
import {MdDelete} from "react-icons/md"
const ManageProducts = () => {

    const [products,setProducts] = useState([])
    const {user,token}=isAuthenticated();
    const preload = ()=>{
        getAllProducts().then(data=>{
            if(data.error){
                console.log(data.error)
            }
            else{
                setProducts(data)
                console.log(data)
            }
        })
    }

    useEffect(() => {
        preload()
    }, []);

    const deleteSelectedProduct=productId=>{
        deleteProduct(productId,user._id,token)
        .then(data=>{
            if(data.error){
                console.log(data.error);
            }
            else{
                preload();
            }
        })
    }
    return (
        <Base title="Welcome admin" description="Manage products here">
            <Heading title="List of all the available products" subtitle="Add Delete or Update the products"/>
            <div className="container">
                <div className="table-responsive">
                <table className="table table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th>Product Name</th>
                            <th>Product Price</th>
                            <th>Stock</th>
                            <th>Sold</th>
                            <th>Category</th>
                            <th>Options</th>
                        </tr>
                        </thead>
                        <tbody>
                        {products.map((product,index)=>{
                            return (
                                <tr key={index}>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.stock}</td>
                                    <td>{product.sold}</td>
                                    <td>{product.category.name}</td>
                                    <td className="d-flex justify-content-around">
                                        <Link to={`/admin/product/update/${product._id}`}><GiPencil className="text-warning " /></Link>
                                        <button className="border-0 bg-transparent" onClick={()=>{deleteSelectedProduct(product._id)}}><MdDelete className="text-danger  size" /></button>
                                    </td>


                                </tr>
                            )
                        })}
                        
 
                        </tbody>
                    </table>
                                    </div>
            </div>
        
        \
      </Base>
    )
}
export default ManageProducts