//l'esercizio chiede di invertire i valori di a e b, ma ho letto su internet
//che la destrutturazione non è fatta per usarla nelle costanti primitive come
// nel caso della riga 5 e 6 quindi li trasformerò in array.

// let a = 5;
// let b = 10;

let a = [5];
let b = [10];

const [cinque] = a;
const [dieci] = b;

a = dieci;
b = cinque;
console.log(`a=${a}
b=${b}`);