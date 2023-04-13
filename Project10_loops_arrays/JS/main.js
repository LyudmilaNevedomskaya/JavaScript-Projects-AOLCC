// While Loop //
function call_loop() {
  let digit = "";
  let x = 1;
  while (x < 11) {
    digit += "<br>" + x;
    x++;
  }
  document.getElementById("loop").innerHTML = digit;
}

// Length Property //
function getTheLength() {
  let sentence = document.getElementById("sentence").value;
  document.getElementById("result").innerHTML = "The length of your input \"" + sentence + "\" is " + sentence.length + " characters.";
  document.getElementById("sentence").value = "";
}

// For Loop //
let content = "";
let instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
function showList() {
  for (let y = 0; y < instruments.length; y++) {
    content += instruments[y] + "<br>"
  }
  document.getElementById("list").innerHTML = content;
}

// Const Keyword //
function constantFunction() {
  const musicalInstruments = {
    type: "Guitar",
    brand: "Fender",
    color: "Black",
    price: "$800"
  }
  document.getElementById("constant").innerHTML = "The cost of the " + musicalInstruments.type + " was " + musicalInstruments.price + ".";
}

// Return Statement //
function yourName(name) {
  return "Hello, " + name + "!"
}
document.getElementById("greeting").innerHTML = yourName("Mila");

// Object //
let car = {
  make: "Dodje ",
  model: "Viper",
  year: "2021 ",
  color: "green ",
  description: function() {
    return "The car is a " + this.year + this.color + this.make + this.model;
  }
}
document.getElementById("carObj").innerHTML = car.description();

// Break and Continue Statement //
function breakFunction() {
  let text = "";
  for (let i = 0; i < 10; i++) {
    if (i === 3) {break}
    text += "The number is " + i + "<br>";
  }
  document.getElementById("breakStatement").innerHTML = text;
}

function continueFunction() {
  let text = "";
  for (let i = 0; i < 10; i++) {
    if (i === 3) {continue}
    text += "The number is " + i + "<br>";
  }
  document.getElementById("continueStatement").innerHTML = text;
}