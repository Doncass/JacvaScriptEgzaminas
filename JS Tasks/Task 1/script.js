/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
const inputKilo = document.getElementById('search');
const convertBtn = document.getElementById('submit-btn')

function convertWeight(){
    event.preventDefault();
   const kilo = inputKilo.value ;
    const svarai = kilo * 2.2046 ;
    const gramai = kilo / 0.001  ;
    const uncijos = kilo * 35.274 ;

const container = document.getElementById('output');
const svaraiLb = document.createElement('p');
const gramaiG = document.createElement('p');
const uncijosOz = document.createElement('p');

svaraiLb.style.backgroundColor = 'green' ;
gramaiG.style.backgroundColor = 'white' ;
uncijosOz.style.backgroundColor = 'red' ;

svaraiLb.style.textAlign = 'center' ;
gramaiG.style.textAlign = 'center' ;
uncijosOz.style.textAlign = 'center' ;

svaraiLb.textContent = svarai ;
gramaiG.textContent = gramai;
uncijosOz.textContent = uncijos;
console.log(svaraiLb);

container.appendChild(svaraiLb);
container.appendChild(gramaiG);
container.appendChild(uncijosOz);

}

convertBtn.addEventListener('click', convertWeight);