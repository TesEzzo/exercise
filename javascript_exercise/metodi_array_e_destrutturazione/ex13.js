function somma(...numbers) {
    return numbers.reduce((a, numbers) => a + numbers, 0);
};
let risultato= somma(1,2,3,4,5,6,7,8,9,10);
console.log(risultato);