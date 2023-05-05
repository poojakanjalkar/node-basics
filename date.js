const dateTime=require("date-and-time")
const now=new Date();
console.log(dateTime.format(now,'YY/MMMM/DD HH:mm:ss:SSS'));
function convertDate(x){
  if(x.isValid==true){
    return dateTime.format(x,'YY/MM/DD')
  }else{
    return 'date is not valid';
  }
r//eturn dateTime.format(x,'YY/MM/DD')
}
console.log(convertDate('pavan'))
