const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())

app.get("/login",(req,res)=>{
    return res.send("Homepage")
})

app.get("/login",(req,res)=>{
    return res.send("Login page")
})

app.post("/login",(req,res)=>{
    return res.send({"msg":"successful"})
    
})

app.listen(8000,(err)=>{
    if(err){
        console.log("Failed to start server")
        return
    }
    console.log("Application Listening on Port 8000")
})