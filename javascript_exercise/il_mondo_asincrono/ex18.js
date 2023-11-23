//la funzione iniziale è scritto dall'esercizio quindi è voluto che non ci sia il reject

function caricamentoDati() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Questi sono i dati ottenuti dalla fonte asincrona.");
        }, 2000);
    });
}

const init = async () => {
    const data= await caricamentoDati()
    console.log(data);
}

init()