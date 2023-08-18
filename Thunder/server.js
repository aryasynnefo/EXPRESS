// import express from "express";
// const app=express();
// const PORT=5001;
// const name="arya";
// const password="arya123";
// app.use(express.json())

// app.post("/",function(req,res){
//     if(name===req.body.name && password===req.body.password){
//         return res.status(200).send("welcome"+ req.body.name + "you are successfully logged in");
//             }
//     else{
//         return res.status(404).send("invalid login");
    
//     }
    
//     res.end();
// })



// app.listen(PORT,()=>{
//     console.log("server running");
// })





// 18/08/2023
// import express from "express";
// const app=express();
// const port=2001;
// app.use(express.json())

// let info=[{id:1,name:"aparna",post:"developer"},
//           {id:2,name:"manu",post:"tester"},
//           {id:3,name:"anu",post:"trainee"},
//           {id:4,name:"anjali",post:"tester"},
//           {id:5,name:"kiran",post:"developer"},
// ]

// app.get("/",(req,res)=>{
//     res.status(200).send(info);
// })

// app.post("/",(req,res)=>{
//     console.log(req.body);

//     res.end()
// })


// app.listen(port,()=>{
//     console.log("server generated");
// })





// import express from "express";
// const app=express();
// const port=2001;
// app.use(express.json())

// let info=[{id:1,name:"aparna",post:"developer"},
//           {id:2,name:"manu",post:"tester"},
//           {id:3,name:"anu",post:"trainee"},
//           {id:4,name:"anjali",post:"tester"},
//           {id:5,name:"kiran",post:"developer"},
// ]

// app.get("/",(req,res)=>{
//     res.status(200).send(info);
// })
// app.get("*",(req,res)=>{
//     res.status(404).send("404 page not found")
// })

// app.post("/",(req,res)=>{
//     console.log(req.body);
//     const data=info.filter((user)=>user.name===req.body.name && user.post===req.body.post);
//     console.log(data);
//     res.send(data);

//     res.end();
// })


// app.listen(port,()=>{
//     console.log("server generated");
// })



// id
// import express from "express";
// const app=express();
// const port=2001;
// app.use(express.json())

// let info=[{id:1,name:"aparna",post:"developer"},
//           {id:2,name:"manu",post:"tester"},
//           {id:3,name:"anu",post:"trainee"},
//           {id:4,name:"anjali",post:"tester"},
//           {id:5,name:"kiran",post:"developer"},
// ]

// app.get("/",(req,res)=>{
//     res.status(200).send(info);
// })
// app.get("*",(req,res)=>{
//     res.status(404).send("404 page not found")
// })

// app.post("/",(req,res)=>{
//     console.log(req.body);
//     const{name,post,id}=req.body;
//     const Uid=parseInt(id);
//     const data=info.filter((user)=>user.id===Uid && user.name===name&& user.post===post);
//     console.log(data);
//     res.send(data);

//     res.end();
// })


// app.listen(port,()=>{
//     console.log("server generated");
// })



// id in url (thunder)
// import express from "express";
// const app=express();
// const port=2001;
// app.use(express.json())

// let info=[{id:1,name:"aparna",post:"developer"},
//           {id:2,name:"manu",post:"tester"},
//           {id:3,name:"anu",post:"trainee"},
//           {id:4,name:"anjali",post:"tester"},
//           {id:5,name:"kiran",post:"developer"},
// ]

// app.get("/",(req,res)=>{
//     res.status(200).send(info);
// })
// app.get("*",(req,res)=>{
//     res.status(404).send("404 page not found")
// })

// app.post("/login/:id",(req,res)=>{
//     console.log(req.params);
//     const {id}=req.params;
//     const Uid=parseInt(id);
//     const data=info.filter((user)=>user.id===Uid)

//     res.send(data)
//     res.end();
// })


// app.listen(port,()=>{
//     console.log("server generated");
// })


// multiple params  (here using id and name)

// import express from "express";
// const app=express();
// const port=2001;
// app.use(express.json())

// let info=[{id:1,name:"aparna",post:"developer"},
//           {id:2,name:"manu",post:"tester"},
//           {id:3,name:"anu",post:"trainee"},
//           {id:4,name:"anjali",post:"tester"},
//           {id:5,name:"kiran",post:"developer"},
// ]

// app.get("/",(req,res)=>{
//     res.status(200).send(info);
// })
// app.get("*",(req,res)=>{
//     res.status(404).send("404 page not found")
// })

// app.post("/login/:id/:name",(req,res)=>{
//     console.log(req.params);
//     const {id,name}=req.params;
//     const Uid=parseInt(id);
//     const data=info.filter((user)=>user.id===Uid && user.name===name)

//     res.send(data)
//     res.end();
// })


// app.listen(port,()=>{
//     console.log("server generated");
// })

 
// single query fetching

// import express from "express";
// const app=express();
// const port=2001;
// app.use(express.json())

// let info=[{id:1,name:"aparna",post:"developer"},
//           {id:2,name:"manu",post:"tester"},
//           {id:3,name:"anu",post:"trainee"},
//           {id:4,name:"anjali",post:"tester"},
//           {id:5,name:"kiran",post:"developer"},
// ]

// app.get("/",(req,res)=>{
//     res.status(200).send(info);
// })
// app.get("*",(req,res)=>{
//     res.status(404).send("404 page not found")
// })

// app.post("/login",(req,res)=>{
//     // console.log(req.query.id);
//     const {id}=req.query;
//     const Uid=parseInt(id);
//     const data=info.filter((user)=>user.id===Uid)

//     res.status(200).send(data)
//     res.end();
// })




// app.listen(port,()=>{
//     console.log("server generated");
// })


// multiple query fetching

import express from "express";
const app=express();
const port=2001;
app.use(express.json())

let info=[{id:1,name:"aparna",post:"developer"},
          {id:2,name:"manu",post:"tester"},
          {id:3,name:"anu",post:"trainee"},
          {id:4,name:"anjali",post:"tester"},
          {id:5,name:"kiran",post:"developer"},
]

app.get("/",(req,res)=>{
    res.status(200).send(info);
})
app.get("*",(req,res)=>{
    res.status(404).send("404 page not found")
})

app.post("/login",(req,res)=>{
    // console.log(req.query.id);
    // console.log(req.query.name);
    const {id,name}=req.query;
    const Uid=parseInt(id);
    const data=info.filter((user)=>user.id===Uid && user.name===name)

    res.status(200).send(data)
    res.end();
})

app.listen(port,()=>{
        console.log("server generated");
    })