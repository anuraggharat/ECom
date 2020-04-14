import React, { useState } from 'react'
import {Link} from "react-router-dom"
import Base from '../core/Base'
import Heading from '../utilities/Heading'
import { isAuthenticated } from '../auth/helper'
import { createCategory } from './helper/adminapicall'


const AddCategory = () => {
    
    const [name,setName] = useState("")
    const[error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const {user,token} = isAuthenticated()

    const handleChange=e=>{
        setError("")
        setName(e.target.value)
    }
    
    const onSubmit=e=>{
        e.preventDefault()
        setError("")
        setSuccess(false)
        createCategory(user._id,token,{name})
        .then(data=>{
            if(data.error){
                setError(true)
                errorMessage()
            }else{
                setError("")
                setSuccess(true)
                successMessage()
                setName("")
            }
        })
    }
    
    const successMessage=()=>{
        alert(`Successfully created category ${name}`)
    }
    const errorMessage=()=>{
        alert(`Category ${name} cannot be created`)
    }
    const AddCategoryForm =()=>(
    
        <div className="card col-8 bg-white border-0 shadow-lg mb-5 p-5 mx-auto">
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label for="name">Category Name</label>
                <input className="form-control" placeholder="Enter your new category name" required onChange={handleChange} value={name}  />
                </div>
                <button className="btn btn-outline-info" type="submit">Add Category</button>
                <button className="float-right btn btn-outline-primary"><Link to="/admin/dashboard">Return Back</Link></button>
        </form>
        </div>
    )
        
    
    return (
        <Base >
            
               <Heading 
               title="ADD CATEGORY"
               subtitle="A New category of shoe's"
               />
               {AddCategoryForm()}
        </Base>
        
    )
}
export default AddCategory