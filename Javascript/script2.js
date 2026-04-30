  const params = new URLSearchParams(window.location.search);//Lägger till användarnamn i inloggningsmeddelandet.
        const text = document.getElementById('välkommen');
        let användarnamn = params.get('användarnamn');
        text.textContent = `Välkommen ${användarnamn}!`;
        
        
        
        let mb = false;//Variabler och dess start värden.
        let xssb = false;
        let ddosb = false;
        let saldo = 100;

        
        const text1 = document.getElementById('output');//Referenser till de olika elementen(Textfält och knappar)
        const pengar = document.getElementById("pengar");
        const mitmBok = document.getElementById('mitmBok');
        const xssBok = document.getElementById('xssBok');
        const ddosBok = document.getElementById('ddosBok');
        const text2 = document.getElementById('pris');


        mitmBok.addEventListener('click', function (event){//En kanpp för inköp av boken "MITM-Bok". Vid aktivering ändras text innhållet för både knappen och textfältet.
            if (mb == false) {
                mb = true;
                saldo -= 10;
                pengar.textContent = "Saldo: " + saldo +"kr";
                text1.textContent = "Du har köpt en eller fler böcker, tack!";
                mitmBok.textContent = "Köpt!";

            }
              
            if (mb == true && xssb == true && ddosb == true){//Kollar ifall alla böcker köpts. Ifall detta stämmer kommer texten för textfälttet output ändras.
            text1.textContent= "Du har köpt alla tre böcker, tack!";
        }
            
        });


               xssBok.addEventListener('click', function (event){//En kanpp för inköp av boken "XSS-Bok". Vid aktivering ändras text innhållet för både knappen och textfältet.
            if (xssb == false) {
                xssb = true;
                saldo -= 10;
                pengar.textContent = "Saldo: " + saldo +"kr";
                text1.textContent = "Du har köpt en eller fler böcker, tack!";
                xssBok.textContent = "Köpt!";

            }
              
            if (mb == true && xssb == true && ddosb == true){//Kollar ifall alla böcker köpts. Ifall detta stämmer kommer texten för textfälttet output ändras.
            text1.textContent= "Du har köpt alla tre böcker, tack!";
        }

        });


         ddosBok.addEventListener('click', function (event){//En kanpp för inköp av boken "DDOS-Bok". Vid aktivering ändras text innhållet för både knappen och textfältet.
            if (ddosb == false) {
                ddosb = true;
                saldo -= 10;
                pengar.textContent = "Saldo: " + saldo +"kr";
                text1.textContent = "Du har köpt en eller fler böcker, tack!";
                ddosBok.textContent = "Köpt!";

            }
              
            if (mb == true && xssb == true && ddosb == true){//Kollar ifall alla böcker köpts. Ifall detta stämmer kommer texten för textfälttet output ändras.
            text1.textContent= "Du har köpt alla tre böcker, tack!";
        }

        });