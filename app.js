const express = require("express");
const { connectDatabase } = require("./dbutil");
const bodyParser = require("body-parser");
const Book = require("./models/book.model");
const Student=require("./models/student.model");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

connectDatabase();
app.get("/", function (req, res) {
  res.json({ firstName: "xyz", lastName: "pqr" });
});
app.post("/", function async(req, res) {
  console.log(req.body);

  // const Book=require("./book.model");
  try {
    const book = new Book({
      title: req.body.title,
      author: req.body.author,
      pages: req.body.pages,
      publishedDate: req.body.publishedDate,
      createdAt: new Date(),
    });
    let d =  book.save()
    console.log("book saved successfully!");


    res.json({ firstName: "xyz", lastName: "pqr", type: "post" });
  } catch (error) {
    console.log("error")
  }
});
app.get("/pooja/:author", async function (req, res) {
  console.log(req.params)
  console.log(req.query)
  let books=await Book.find({author:req.params.author})
  res.json({ message: " data fetched successfully" ,payload:books});
});
app.listen(3000, () => {
  console.log(`Server started on ${3000}`);
});
app.put("/",async function(req,res){
  console.log(req.body)
  let data=await Book.findOneAndUpdate({
    _id:req.body.id}, {author:req.body.newAuthor},{new:true})
  res.json({message:"book details updated succesfully",payload:data})
})

app.delete("/:id",async function(req,res){
  console.log(req.params)
  let data=await Book.deleteOne({_id:req.params.id})
  res.json({message:"book details deleted successfully",payload:data})
})
app.get("/books",async function(req,res){
  console.log(req.params)
  console.log(req.query)
  let books1=await Book.findById(req.query.id)
  res.json({message:"getting data by id",payload:books1});


})
app.post("/students",function async(req,res){
  console.log(req.body);

try{
  const students=new Student({
    firstName:req.body.firstName,
    lastName:req.body.lastName,
    rollNo:req.body.rollNo,
    address:req.body.address,
    dob:req.body.dob
  });
  let c=students.save()
  console.log("student data saved successfully!");
res.json({firstName:"pooja",lastName:"Kanjalkar",payload:c});
}catch(error){
  console.log(error)
}
});
app.get("/students/:rollNo",async function(req,res){
  console.log(req.params)
  console.log(req.query)
  let students=await Student.find({rollNo:req.params.rollNo})
  res.json({message:"data fetched successfully",payload:students});
});
app.put("/students",async function(req,res){
  console.log(req.body)
  let field=await Student.findOneAndUpdate({
    rollNo:req.body.rollNo},{fistName:req.body.newName},{new:true})
    res.json({message:"updated data",payload:field})
  });
  app.delete("/students/:firstName",async function(req,res){
      console.log(req.params)
      let d1=await Student.deleteOne({
        firstName:req.params.firstName})
        res.json({message:"deleted successfully",payload:d1})
      })
