const express=require("express")
const bodyParser=require("body-parser")
const axios=require("axios")
const app=express();

const cors = require('cors');
app.use(cors({
    origin: '*',
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));

app.use(bodyParser.urlencoded({extended:true}));
app.get("/",(req, res)=>{
  console.log("------------hitting server------")
  return res.status(200).json({message:"this response from server"})
  // next()

})
// app.get("/",function(req,res){
//   res.sendFile(__dirname + "/calculator.html");
// })

/*app.post("/",function(req,res){
  var a=req.body.num1;
  var b=req.body.num2;

  console.log("inputs-------", req.body.num1, req.body.num2)

  var result=a+b;
  res.send("result of calculator is" + result);
})*/
app.get("/users/:id",async function(req,res){

  let userId=req.params.id;
  let qur=req.query;
  console.log("query param=",qur);
  console.log("user id =",userId);

let response=await axios.get("https://jsonplaceholder.typicode.com/todos/"+userId)

  res.json({
    message:"successfully fetched user list",
    response:response.data

  })
})


app.listen(5500, function(){
  console.log("server started.")
})