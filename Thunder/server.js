import express from "express";
const app=express();
const PORT=5001;
const name="arya";
const password="arya123";
app.use(express.json())

app.post("/",function(req,res){
    if(name===req.body.name && password===req.body.password){
        return res.status(200).send("welcome"+ req.body.name + "you are successfully logged in");
            }
    else{
        return res.status(404).send("invalid login");
    
    }
    
    res.end();
})



app.listen(PORT,()=>{
    console.log("server running");
})