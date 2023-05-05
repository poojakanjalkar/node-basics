const express=require('express')
const app=express()

app.get('/',function (req,res){
  res.json({firstName:'xyz',lastName:'pqr'})
})
app.listen(3000)



