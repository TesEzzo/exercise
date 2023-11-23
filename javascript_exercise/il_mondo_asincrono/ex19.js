//la funzione iniziale è scritto dall'esercizio quindi è voluto che non ci sia il reject

function caricaModulo(modulo) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Il modulo ${modulo} è stato caricato.`);
        }, 2000);
    });
}

const lanciaVeicoloSpaziale = async (a,b,c) => {
    const moduloA = await caricaModulo(a)
    const moduloB = await caricaModulo(b)
    const moduloC = await caricaModulo(c)
    console.log(`${moduloA}...
${moduloB}...
${moduloC}...
Veicolo spaziale pronto per il lancio!`);
}

lanciaVeicoloSpaziale("Launch Escape System", "di comando e servizio", "lunare")