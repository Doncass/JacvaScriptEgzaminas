/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */


 const clickBtn = document.getElementById('btn__element') ;
 let clickNumber = document.getElementById('btn__state') ;
 let count = 0;

 clickBtn.addEventListener('click', clickCount)


 function clickCount(){
    
    count++;
    clickNumber.innerText = count
 }