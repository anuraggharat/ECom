const Product = require("../models/product")
const formidable = require("formidable")
const _ = require("lodash")
const fs = require("fs")

exports.getProductById=(req,res,next,id)=>{
    Product.findById(id)
    .exec((err,product)=>{
        if(err){
            return res.status(400).json({
                error:"Product Not Found"
            })
        }
        req.product = product;
        next()
    })
}

exports.createProduct=(req,res)=>{
    let form = new formidable.IncomingForm()
    form.keepExtensions=true
    form.parse(req,(err,fields,file)=>{
        if(err){
            return res.status(400).json({
                error:"problem with the image"
            })
        }

        //destructure the fields
        const {name,description,price,category,stock}=fields
        if(
            !name ||
            !description ||
            !price ||
            !category ||
            !stock
        ){
            return res.status(400).json({
                error:"No empty fields plz"
            })
        }


        let product = new Product(fields)
        //handle file here
        if (file.photo){
            if(file.photo.size>3000000){
                return res.status(400).json({
                    error:"File size too big"
                })
            }
            product.photo.data=fs.readFileSync(file.photo.path)
            product.photo.contentType=file.photo.type    
        }
        product.save((err,product)=>{
            if(err){
                es.status(400).json({
                    error:"Couldnt save a product in db"
                })
            }
            res.json(product)
        })


    })
}

exports.getProduct=(req,res)=>{
    req.product.photo=undefined
    
    return res.json(req.product)
}
exports.photo=(req,res,next)=>{
    if(req.product.photo.data){
        res.set("Content-type",req.product.photo.contentType)
        return res.send(req.product.photo.data)
    }
    next()
}


exports.deleteProduct=(req,res)=>{
    let product = req.product
    product.remove((err,deletedProduct)=>{
        if(err){
            return res.status(400).json({
                error:"Failed to delete the product"
            })
        }
        res.json({
            message:"deletion was a success",deletedProduct
        })
    })
}

exports.updateProduct=(req,res)=>{
    let form = new formidable.IncomingForm()
    form.keepExtensions=true
    form.parse(req,(err,fields,file)=>{
        if(err){
            return res.status(400).json({
                error:"problem with the image"
            })
        }

        let product = req.product;
        product=_.extend(product,fields)
        //handle file here
        if (file.photo){
            if(file.photo.size>3000000){
                return res.status(400).json({
                    error:"File size too big"
                })
            }
            product.photo.data=fs.readFileSync(file.photo.path)
            product.photo.contentType=file.photo.type    
        }
        product.save((err,product)=>{
            if(err){
                es.status(400).json({
                    error:"Updation product failed"
                })
            }
            res.json(product)
        })


    })
}
exports.getAllProducts=(req,res)=>{
    let limit = req.query.limit ? parseInt(req.query.limit) : 8 
    let sortBy = req.query.sortBy ? req.query.sortBy : "_id";
    Product.find()
    .select("-product")
    .populate("category")
    .sort([[sortBy,"asc"]])
    .limit(limit)
    .exec((err,products)=>{
        if(err){
            return res.status(400).json({
                error:"No product found"
            })
        }
        res.json(products)
    })
}