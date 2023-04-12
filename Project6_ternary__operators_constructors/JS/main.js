function rideFunction() {
  let age;
  let canVote;

  age = document.getElementById("age").value;
  canVote = (age < 18) ? "Sorry! You are too young" : "Congrats! You are ready";
  document.getElementById("vote").innerHTML = canVote + " to Vote."
  document.getElementById("age").value = "";
}

// Keywords and Constructors
function Vehicle(Make, Model, Year, Color) {
  this.Vehicle_Make = Make;
  this.Vehicle_Model = Model;
  this.Vehicle_Year = Year;
  this.Vehicle_Color = Color;
}
let Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
let Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
let Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction() {
  document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year + ".";
}

// Reserved Keywords
//let break = true;
//console.log(break);

// JavaScript Object Constructor
function Student(firstName, lastName, age, grade) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.grade = grade;
}
let Mila = new Student("Mila", "Nevedomskaya", 25, 3);
let Max = new Student("Maxim", "Kukoba", 17, 5);
let Bell = new Student("Bella", "Mortis", 22, 7);

function myStudent() {
  document.getElementById("Student_Constructor").innerHTML = "This is " + Mila.firstName + " " + Mila.lastName + " she is " + Mila.age + " years old and she is in grade " + Mila.grade + ".";
}

// Nested Functions
function count_Function() {
  document.getElementById("Nested_Function").innerHTML = Count();
  function Count() {
    let start = 9;
    function plusOne() {start += 1;}
    plusOne();
    return start;
  }
}