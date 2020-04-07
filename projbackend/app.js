require("dotenv").config()
const mongoose = require("mongoose")
const express = require("express")
const app=express()
const bodyparser=require("body-parser")
const cookieparser=require("cookie-parser")
const cors=require("cors")
//routes from auth 
const authRoutes = require("./routes/auth")
const userRoutes = require("./routes/user")


//db connection
mongoose.connect(process.env.DATABASE,{useNewUrlParser:true,useUnifiedTopology: true,useCreateIndex:true })
        .then(()=>{
            console.log("DB CONNECTED");
            
        }).catch((e)=>{
            console.log(`Error is ${e}`)
        })


//middlewares
app.use(bodyparser.json())
app.use(cookieparser())
app.use(cors())


//myroutes
app.use("/api",authRoutes)
app.use("/api",userRoutes)
//port
const port=process.env.PORT||8000;

//starting a server
app.listen(port,()=>{
    console.log(`app is running ${port}`);
    
})