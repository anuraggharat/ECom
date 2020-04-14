import React,{useState} from 'react'
import Base from '../core/Base'
import Heading from '../utilities/Heading'

const AddProduct = () => {

    const [values,setValues ] = useState({
        name:"",
        description:"",
        price:"",
        stock:""
    })
    
    const {name,description,price,stock}=values
    
    const onSubmit=()=>{

    }
    const handleChange=()=>{

    }



    
    const createProductForm = () => (
        <form>

          <div className="form-group">
            <input
              onChange={handleChange("name")}
              name="photo"
              className="form-control"
              placeholder="Name"
              value={name}
            />
          </div>
          <div className="form-group">
            <textarea
              onChange={handleChange("description")}
              name="photo"
              className="form-control"
              placeholder="Description"
              value={description}
            />
          </div>
          <div className="form-group">
            <input
              onChange={handleChange("price")}
              type="number"
              className="form-control"
              placeholder="Price"
              value={price}
            />
          </div>
          <div className="form-group">
            <select
              onChange={handleChange("category")}
              className="form-control"
              placeholder="Category"
            >
              <option>Select</option>
              <option value="a">a</option>
              <option value="b">b</option>
            </select>
          </div>
          <div className="form-group">
            <input
              onChange={handleChange("quantity")}
              type="number"
              className="form-control"
              placeholder="Quantity"
              value={stock}
            />
          </div>
          <div className="form-group">
            <label className="btn btn-info">
              <input
                onChange={handleChange("photo")}
                type="file"
                name="photo"
                accept="image"
                placeholder="choose a file"
              />
            </label>
          </div>
          <button type="submit" onClick={onSubmit} className="btn btn-outline-success">
            Create Product
          </button>
        </form>
      );
    
    
    return (
            <Base>
            
                <Heading title="Add a new Poduct" subtitle=""></Heading>
                <div className="container bg-light p-5">
                    {createProductForm()}
                </div>
            </Base>

    )
}
export default AddProduct