//controller

const Category = require("../models/category")

exports.getCategoryById=(req,res,next,id)=>{
    
    Category.findById(id).exec((err,cate)=>{
        if(err){
            return res.status(400).json({
                error:"category not found"
            })
        }
        req.Category=cate;
        next()
    })
}

exports.createCategory=(req,res)=>{
    const category =new Category(req.body)
    category.save((err,category)=>{
        if(err){
            return res.status(400).json({
                error:"Mot able to create category"
            })
        }
        res.json({category});
    })

}
exports.getCategory=(req,res)=>{
    return res.json(req.category);
}
exports.getCategories=()=>{
    Category.find().exec((err,items)=>{
        if(err){
            return res.status(400).json({
                error:"Not categpries found"
            })
        }
        res.json(items)
    })
}
exports.updateCategory=(req,res)=>{
    const category = req.category
    category.name= req.body.name
    category.save((err,category)=>{
        if(err){
            return res.status(400).json({
                error:"Failed to update category"
            })
        }
        res.join(updateCategory)
    })
}
exports.removeCategory=(req,res)=>{
    const category = req.category;
    category.remove((err,category)=>{
        if(err){
            return res.status(400).json({
                error:"Failed to delete category"
            })
        }
        res.json({
            message:"successfully deleted"
        })
    })
}