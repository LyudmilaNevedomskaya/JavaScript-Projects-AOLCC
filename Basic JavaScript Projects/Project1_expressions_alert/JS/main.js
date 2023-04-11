//window alert example
window.alert('Hello Window Alert!!!');

//document write example
document.write('It is document.write method. <hr>');

// assigning a variable
let A = " This is a string. <br> <hr>";

document.write(A);

let B = "Lisa told Bart, \"Knock it off, Bart! Or I'll tell dad!\" <br> \"Eat my shorts!!! \" Bart responded. <hr>";

document.write(B);

//using concatenation
let concatWords = "<br>\"Be who you are and say what you feel," + " because thouse who mind don\'t matter and those who matter don\'t mind.\"" + " - Dr. Seuss <hr>";

document.write(concatWords);

let firstName = "Mila";
let sentence = " likes ice cream";
let son = "Yarik";

document.write(firstName + " and " + son + sentence);
document.write("<hr>");

//Expression//
document.write("3 + 3 = ");
document.write(3 + 3);
document.write("<hr>");

//Events
function showSentence() {
  document.getElementById("par").classList.toggle("visible");
  // if (par.style.display === "none") {
  //   par.style.display = "block";
  // } else {
  //   par.style.display = "none";
  // }
}