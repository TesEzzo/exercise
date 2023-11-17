function performOperation(a, b, callback) {
    const result=a+b
    return callback(result)
}

function displayResult(result) {
    if (typeof result != "number") {
        throw new Error("Inserire solo numeri") //<= l'esercizio chiedeva la gestione degli errori e ho semplicemente copia e
                                                // incollato l'esercizio callback 5 perchè avevo già messo il messaggio di errore
    }
    console.log(`Il risultato è ${result}`);
}

performOperation(5, 3, displayResult);