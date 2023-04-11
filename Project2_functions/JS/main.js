function showQuestion() {
  document.getElementById("par").classList.add("visible");
}

function showAnswer() {
  document.getElementById("answer").classList.add("visible");
}

// Operator Assignment
function concat() {
  let sentence = "I am learning";
  sentence += " a lot from this book!";
  document.getElementById("concat").innerHTML = sentence;
}
