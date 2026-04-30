//Variabler
let användarnamn = null;
const forbiddenCharacters = "!@#$%^&*()_+=[]{}|;:'\",<>/?`~\\";
const form = document.getElementById('inloggForm');


function valideraAnvändarnamn(användarnamn) {//Sätter en gräns för antalet tecken användarnamnet behöver innehålla samt ogiltighetsförklarar specialtecken.
    if (användarnamn.length < 2) {
        return false; //För kort.
    }

    for (let char of användarnamn) {
        if (forbiddenCharacters.includes(char)) {
            return false; //Ogiltigt tecken.
        }
    }

    return true; //Godkänt användarnamn.
}

//Hantera formulär-submission.
form.addEventListener('submit', function (event) {
    event.preventDefault();

    const text = document.getElementById('användarnamn').value.trim();
    const lösenord = document.getElementById('lösenord').value;

    //Kör valideringen.
    if (!valideraAnvändarnamn(text)) {
        alert("Ogiltigt användarnamn. Minst 2 tecken och inga specialtecken.");
        return;
    }

    //Inloggningskontroll.
    if (text == "ab" && lösenord == "123") {
        användarnamn = text;
        window.location.href = `Start.html?användarnamn=${encodeURIComponent(användarnamn)}`;
    } else {
        alert("Fel användarnamn eller lösenord!");
    }
});
  