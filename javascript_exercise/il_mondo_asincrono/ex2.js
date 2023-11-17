function contoAllaRovescia(num, stop) {
    let time = num;
    if (typeof time != "number") {
        throw new Error("Inserire un numero")
    }
    console.log(`Conto alla rovescia in corso...
    ${time}`);

    const counter = setInterval(() => {
        time--;
        console.log(`${time}`);
    }, 1000)

    setTimeout(() => {
        clearInterval(counter)
        console.log(`Conto alla rovescia terminata.`);
    }, stop);
}

contoAllaRovescia(10, 10100)

//in collaborazione con Tommaso