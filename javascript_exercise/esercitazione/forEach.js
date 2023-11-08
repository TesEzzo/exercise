let eser = [1, 2, 3, 4, 5, 6, 7];

function stampaDispari(eser) {
    let risultato = [];
eser.forEach((numero) => {
    if (numero % 2 !== 0) {
        risultato.push(numero);
    };
});
return risultato;
};
console.log(stampaDispari(eser));