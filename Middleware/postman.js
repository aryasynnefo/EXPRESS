const express=require("express");
const app=express();

const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// let arr=[1,2,3,4,5,6,7,8]
// app.get("/",function(req,res){
//     res.status(200).send(arr)
// })

app.post("/",function(req,res){
    console.log(req.body);
    res.end()
})
app.listen(2001,()=>{
    console.log("server running");
})