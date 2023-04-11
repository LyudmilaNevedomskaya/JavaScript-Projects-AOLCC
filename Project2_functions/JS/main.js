function showQuestion() {
  document.getElementById("joke").classList.remove("visible");
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

// Show Joke image
function showJoke() {
  document.getElementById("par").classList.remove("visible");
  document.getElementById("answer").classList.remove("visible");
  document.getElementById("joke").classList.add("visible");
}