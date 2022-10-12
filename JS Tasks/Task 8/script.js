/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
function Calculator(a, b, toDo){
    this.a = a;
    this.b = b;
    this.toDo = toDo;
    switch(toDo){
        case 'sum':
            rez = this.a + this.b ;
            break;
        case 'subtraction':
            rez = this.a - this.b ;
            break;
        case 'multiplication':
            rez = this.a * this.b ;
            break;  
        case 'division':
            rez = this.a / this.b ;
            break;
        default:
            rez = 'error input'   
    }
     return console.log(rez);

}

Calculator(6, 3, 'division')