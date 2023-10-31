function reverseIfOdd(word) {
    let placeholder = "";
    if (word.length % 2 === 0) {
        return word;
    } else {
        for (let i = word.length - 1; i >= 0; i--) {
            placeholder+= word[i];
        }
        return placeholder;
    }
}
console.log(reverseIfOdd("worde"));
// al giro 0 => i = 4 placeholder = "e"
// al giro 1 => i = 3 placeholder = "ed"
// al giro 2 => i = 2 placeholder = "edr"
// al giro 3 => i = 1 placeholder = "edro"
// al giro 4 => i = 0 placeholder = "edrow"
// al giro 5 => i = -1 STOP


//---------------------------------------------


// const text = "string"

// function reverseIfOdd(text) {
//     if (text.length % 2 === 0) {
//         return text
//     } else {
//         return text.split("").reverse().join("")
//     }
// }

// console.log(reverseIfOdd(text))

// questa funziona prende una parola, vede se la lunghezza della parola è pari o dispari, se è pari il console.log lo scrive normalmente, se dispari lo scrive al contrario