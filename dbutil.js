const mongoose=require('mongoose')
const connectionString='mongodb+srv://testuser:tiJzcUEZWBBGZMQZ@cluster0.tl663c1.mongodb.net/library?retryWrites=true&w=majority'
const option={useUnifiedTopology:true}
function connectDatabase(){
  mongoose.connect(connectionString,option)
  .then(resp=> {
    console.log("Connected to database")
  }).catch(err=> {
    console.log("Error occurred while connecting to database", err)
  })
}

module.exports ={
  connectDatabase
}