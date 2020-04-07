const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema


const productSchema=new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true,
        maxlength:32
    },
    description:{
        type:String,
        required:true,
        maxlength:2000,
        trim:true,
    },
    price:{
        type:Number,
        required:true,
        maxlength:32,
        trim:true,
    },
    category:{
        type:ObjectId,
        ref:"Category"

    },
    size:{
        type:Number,
        required:true
    },
    color:{
        type:String,
        required:true,
        trim:true,
    },
    stock:{
        type:Number,
        default:0
    },
    sold:{
        type:Number,
        default:0
    },
    photo:{
        data:Buffer,
        contentType:String
    }

},{
    timestamps:true
})



module.exports =mongoose.model("Product",productSchema)