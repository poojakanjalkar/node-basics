const mongoose= require('mongoose');
const studentSchema=new mongoose.Schema({
  firstName:{type:String,required:true},
  lastName:{type:String,required:true},
  rollNo:{type:Number,required:true},
  address:{type:String,required:true},
  dob:{type:Date,default:Date.now}
});
const Student=mongoose.model('Student',studentSchema);
module.exports=Student;