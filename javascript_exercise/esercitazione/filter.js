const numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function filtroDispari(dispari) {
//     return (dispari % 2 !== 0);
// }

// let risultato= numeri.filter(filtroDispari)

// console.log(risultato);

function filtroMaggiore(maggiore) {
    return (maggiore  > 5 && maggiore < 8)
}

let risultato=numeri.map(filtroMaggiore)
console.log(risultato);