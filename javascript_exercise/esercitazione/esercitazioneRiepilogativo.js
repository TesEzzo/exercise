let numeri =[3,6,2,7,1,8,4,10,9,5]
function faseUno(forEach) {
   return numeri.forEach((numeri)=>console.log(numeri));
};
faseUno()

function faseDue(pari) {
    return (pari % 2 === 0);
};
let pari=numeri.filter(faseDue)
console.log(pari);

function faseTre(ordineCrescente) {
     pari.sort((a,b)=> a - b);
     return pari;
};

let riordinati= faseTre(pari);
console.log(riordinati);

function faseQuattro(aggiuntaVirgole) {
    return riordinati.join(", ");
};

console.log(faseQuattro(riordinati));