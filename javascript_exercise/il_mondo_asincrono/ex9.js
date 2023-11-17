function performOperation(a, b, callback) {
    const result=a+b
    return callback(result)
}

function displayResult(result) {
    if (typeof result != "number") {
        throw new Error("Inserire solo numeri")
    }
    console.log(`Il risultato è ${result}`);
}

performOperation(5, 3, displayResult);