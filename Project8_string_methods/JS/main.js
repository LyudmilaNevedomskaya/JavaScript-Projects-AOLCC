///// concat method /////
function fullSentence() {
  let part1 = "I have ";
  let part2 = "made this ";
  let part3 = "into a complete ";
  let part4 = "sentence."
  let wholeSentence = part1.concat(part2, part3, part4);
  document.getElementById("concatenate").innerHTML = wholeSentence;
}

///// slice method /////
function sliceMethod() {
  let sentence = "All work and no play makes Johnny a dull boy.";
  let section = sentence.slice(27, 33);
  document.getElementById("slice").innerHTML = "Sliced part: " + section;
}

///// toUpperCase method /////
function upMethod() {
  let sentence = "What we think, we become.";
  let result = sentence.toUpperCase();
  document.getElementById("upperCase").innerHTML = "\"" + result + "\"" + " - Buddha";
}

///// search method /////
function searchMethod() {
  let text = "Any code of your own that you haven't looked at for six or more months might as well have been written by someone else";
  let word = document.getElementById("word").value;
  let position = text.search(word);
  if (position === -1) {
    document.getElementById("position").innerHTML = "There is no word \"" + word + "\"" + " in this sentence.";
    document.getElementById("word").value = "";
  } else {
    document.getElementById("position").innerHTML = "Position of \"" + word + "\"" + " is " + position + ".";
    document.getElementById("word").value = "";
  }
  //console.log(word);
  //console.log(position);
}

///// toString method /////
function numberToStringMethod() {
  let number = Number(document.getElementById("number").value);
  let converted = number.toString();
  console.log(typeof converted);
  document.getElementById("number_to_string").innerHTML = "Now your number is a string \"" + converted + "\"."
  document.getElementById("number").value = "";
}

///// toPrecision method /////
function specifyLength() {
  let n = 13.371456186596231589654135495264;
  let number = Number(document.getElementById("num-to-prec").value);
  if (number < 2 || number > 7) {
    document.getElementById("precision").innerHTML = "Please enter a number from 2 to 7!!!";
    document.getElementById("num-to-prec").value = "";
  } else {
    document.getElementById("precision").innerHTML = "Result: " + n.toPrecision(number);
    document.getElementById("num-to-prec").value = "";
  }
}

///// toFixed method /////
function fixedFunction() {
  let n = 13.371456186596231589654135495264;
  let number = Number(document.getElementById("num-to-fix").value);
  if (number < 0 || number > 5) {
    document.getElementById("toFix").innerHTML = "Please enter a number from 0 to 5!";
    document.getElementById("num-to-fix").value = "";
  } else {

    document.getElementById("toFix").innerHTML = "Result: " + n.toFixed(number);
    document.getElementById("num-to-fix").value = "";
  }
}

///// valueOf method /////
function getValue() {
  let text = "If at first you don't succeed; call it version 1.0";
  let result = text.valueOf();
  document.getElementById("value").innerHTML = result;
}