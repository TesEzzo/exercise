const dice_6=(Math. random() * (6 - 1 + 1) + 1).toFixed(0);
const dice_20=(Math. random() * (20 - 1 + 1) + 1).toFixed(0);

console.log("Lancio dei dadi in corso...");

function choise(dicetype){
    if (dicetype == "D6") {
        setTimeout(() => {
            console.log(`Lancio del dado:
        D6 = ${dice_6}.`)
        }, 2000);
    } else if (dicetype == "D20") {
        setTimeout(() => {
            console.log(`Lancio del dado:
        D20 = ${dice_20}.`)
        }, 2000);
    } else {
        throw new Error("Inserire il tipo di dado giusto es: D6 o D20")
    };
}

choise("D20")