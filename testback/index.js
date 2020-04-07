//require express
const express = require("express")
//initializes a app 
const app = express();
//port declared

const port = 8000
//get request

const admin=(req,res)=>{
    res.send('admin here')
} 
const isAdmin=(req,res,next)=>{
    console.log("isadmin")
    next();
}
const isloggedin =(req,res,next)=>{
    console.log("loggin in")
    next()
}

app.get("/admin",isloggedin,isAdmin,admin)

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/login', (req, res) => res.send('login'))
app.get('/siginup', (req, res) => res.send('siginup'))
//listens the port

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))