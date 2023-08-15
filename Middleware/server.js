
// // token creation
// const express=require("express");
// const path=require("path");

// const app=express();
// const PORT=5000;

// app.get("/",Token,function(req,res){
//     res.status(200).sendFile(path.join(__dirname,"templates","index.html"))   
// })

// function Token(req,res,next){
//     console.log("token created");
//     next();
// }
// app.listen(PORT,()=>{
//     console.log("server running");
// })

// token accessing

const express=require("express");
const path=require("path")

const app=express();
const PORT=4001;

app.get("/",Token,validate,function(req,res){
    res.status(200).sendFile(path.join(__dirname,"templates","index.html"))
})

function Token(req,res,next){
    const Token="";
    req.token=Token;
    console.log("token created");
    next();

    
}

function validate(req,res,next){
    if(req.token){
        console.log("login approved");
    }
    else{
        console.log("log in not approved");
    }
}

app.listen(PORT,()=>{
    console.log("server running");
})