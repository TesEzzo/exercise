//che mi moltiplichi i numeri dall'indice 0 a 5 e sapere se è pari o dispari

let esercizio=[1,2,3,4,5,6,7,8,9,10]

function filtraggio(filtro) {
    return (filtro < 7)
}

let secondaParte= esercizio.filter(filtraggio)

function moltiplicazione(Array){
    let moltiplicato= 1;
    Array.forEach(prodotto => {
         (moltiplicato*=prodotto)
    });
    if (moltiplicato % 2 === 0) {
        return (`${moltiplicato} è pari`)
    }
}

console.log(moltiplicazione(secondaParte));