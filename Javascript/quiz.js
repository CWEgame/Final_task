//Variabler
let svar = null;
const forbiddenCharacters = "!@#$%^&*()_+=[]{}|;:'\",<>/?`~\\";
const form = document.getElementById("inloggForm");

function valideraSvar(svar) {
  //Sätter en gräns för antalet tecken svaret behöver innehålla samt ogiltighetsförklarar specialtecken.
  if (svar.length < 2) {
    return false; //För kort.
  }

  for (let char of svar) {
    if (forbiddenCharacters.includes(char)) {
      return false; //Ogiltigt tecken.
    }
  }

  return true; //Godkänt svar.
}
