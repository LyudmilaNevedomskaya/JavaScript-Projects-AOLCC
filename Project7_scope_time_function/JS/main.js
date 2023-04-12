// Local variable //
////////////////////
function addNumbers() {
  let x = 10;
  document.write("Here I used Local Variable: ")
  document.write(20 + x + "<br><hr>");
}

//  This function will produce an error because I try to use "X" variable, but it was declared inside another function
function multiply() {
  document.write(120 + x + "<br><hr>");
}

addNumbers();
//multiply();

// Global Variable //
////////////////////
let y = 10;
function subtract() {
  document.write("Here I used Global Variable: ")
  document.write(30 + y + "<br><hr>")
}

subtract();

// getDate method //
///////////////////
function get_Date() {
  const date = new Date().getHours();
  console.log(date);
  if (date > 5 && date < 12) {
    document.getElementById("getDate").innerHTML = "It's time to have a breakfast!!!";
  }
  if (date >= 12 && date < 16) {
    document.getElementById("getDate").innerHTML = "It's time to have a lunch!!!";
  }
  if (date >= 16 && date < 22) {
    document.getElementById("getDate").innerHTML = "It's time to have a dinner!!!"
  }
  if (date > 22 && date <= 5) {
    document.getElementById("getDate").innerHTML = "It's time to sleep!!!"
  }
}

// If and Else Statements //
///////////////////////
function ageFunction() {
  let age = Number(document.getElementById("age").value);
  console.log(age);
  if (age >= 18) {
    document.getElementById("vote").innerHTML = "You are old enough to vote!";
    document.getElementById("age").value = "";
  }
  else {
    document.getElementById("vote").innerHTML = "You are not old enough to vote!";
    document.getElementById("age").value = "";
  }
}

// Else If Statement //
//////////////////////
function getTime() {
  let time = new Date().getHours();
  let reply;
  if (time < 12 && time > 0) {
    reply = "It is morning time!!!";
  } else if (time >= 12 && time < 18) {
    reply = "It is afternoon!";
  } else {
    reply = "It is evening time!!!";
  }
  document.getElementById("time").innerHTML = reply;
}