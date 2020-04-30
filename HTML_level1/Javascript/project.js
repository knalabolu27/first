var FirstName= prompt("Hello and Welcome.please enter your First Name:");
var LastName =prompt("Please enter your Last Name:");
var Age=prompt("How old are you?");
var Height=prompt("how tall are you in centimeters?");
var PetName=prompt("What is the Name of your Pet?");
alert("Thank you so much for the information.")

var fstcond=null;
var scndcond=null;
var thrdcond=null;
var frthcond=null;


if (FirstName[0]===LastName[0])
{
  fstcond=(true)
}
else{
  fstcond=(false)
}
if (20<Age<30)
{
  scndcond=(true)
}
else{
  scndcond=(false)
}

if(Height>=170){
  thrdcond=(true)
}
else {
  thrdcond=(false)
}

if (PetName[PetName.length-1]==="y") {
  frthcond=(true)
}
else {
  frthcond=(false)
}

if(fstcond && scndcond && thrdcond && frthcond){
  console.log("Welcome comrade, you are in");
}
else {
  console.log("Sorry something went wrong");
}
