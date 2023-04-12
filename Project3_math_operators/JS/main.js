function mathOperators() {
  let numOne = 965;
  let numTwo = 5;

  // Addition
  let sum = numOne + numTwo;
  let addition = "965 + 5 = ";
  document.getElementById("add").innerHTML = addition + sum;

  // Subtraction
  let subtract = numOne - numTwo;
  document.getElementById("subtract").innerHTML = "965 - 5 = " + subtract;

  // Multiplication
  let multiply = numOne * numTwo;
  document.getElementById("multiply").innerHTML = "965 * 5 = " + multiply;

  // Division
  let divide = numOne / numTwo;
  document.getElementById("divide").innerHTML = "965 / 5 = " + divide;

  // Multiple Operators
  let simple_Math = (1 + 2) * 10 / 2 - 5;
  document.getElementById("multipleOperators").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;

  // Modulus Operator
  let modulus = 56 % 5;
  document.getElementById("modulus").innerHTML = "When you divide 56 by 5 you have a remainder of: " + modulus;

  // Negation Operator
  let negation = numOne;
  document.getElementById("negation").innerHTML = -negation;

  // Increment and Decrement
  let increment =  numOne;
  increment++;
  document.getElementById("increment").innerHTML = "Number 965 was Incremented and now it is equals " + increment;

  let decrement = numOne;
  decrement--;
  document.getElementById("decrement").innerHTML = "Number 965 was Decremented and now it is equals " + decrement;

  // Random Number
  let random = Math.round(Math.random() * 100);
  document.getElementById("random").innerHTML = "Here is a random number bitween 0 and 100: " + random;

  // Math Object Methods
  let pow = Math.pow(8, 2)
  document.getElementById("pow").innerHTML = "Math.pow(8, 2) returns the value of 8 to the power of 2: " + pow;

  let sqrt = Math.sqrt(81)
  document.getElementById("sqrt").innerHTML = "Math.sqrt(81) returns the square root of 81: " + sqrt;

  let min = Math.min(81, 13, 5, 952, 16 , 12);
  document.getElementById("min").innerHTML = "Math.min(81, 13, 5, 952, 16, 12) returns the lowest value in a list of arguments: " + min;

  let max = Math.max(81, 13, 5, 952, 16 , 12);
  document.getElementById("max").innerHTML = "Math.max(81, 13, 5, 952, 16, 12) returns the lowest value in a list of arguments: " + max;
}

mathOperators();