/* Skapar variablar som länkar till HTML-elementen */
const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");

const submit = document.getElementById("submit");

const result1 = document.getElementById("result1");
const result2 = document.getElementById("result2");
const result3 = document.getElementById("result3");

/*Variablerna som krävs */
const correctAnswer1 = "Bosilkovska";
const correctAnswer2 = "2026-06-04";
const correctAnswer3 = "Harvey Metcalfe";

function checkAnswer(question) {
  /*Kollar om svaret är rätt eller fel och skriver ut resultatet i HTML-elementen*/
  if (question === 1) {
    if (answer1.value === correctAnswer1) {
      result1.textContent = "Correct!";
      result1.style.color = "green";
    } else {
      result1.textContent = "Wrong!";
      result1.style.color = "red";
    }
  } else if (question === 2) {
    if (answer2.value === correctAnswer2) {
      result2.textContent = "Correct!";
      result2.style.color = "green";
    } else {
      result2.textContent = "Wrong!";
      result2.style.color = "red";
    }
  } else if (question === 3) {
    if (answer3.value === correctAnswer3) {
      result3.textContent = "Correct!";
      result3.style.color = "green";
    } else {
      result3.textContent = "Wrong!";
      result3.style.color = "red";
    }
  }
}
