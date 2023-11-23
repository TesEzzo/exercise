function caricaModulo(modulo) {
    return new Promise((resolve, reject) => {
        const tempoCaricamento = Math.random() * 3000; // Simula il caricamento con un ritardo casuale fino a 3 secondi.
        setTimeout(() => {
            if (tempoCaricamento < 1500) {
                resolve(`Il modulo ${modulo} è stato caricato.`);
            } else {
                reject(new Error(`Errore durante il caricamento del modulo ${modulo}.`));
            }
        }, tempoCaricamento);
    });
}

// implementa la funzione asincrona "lanciaVeicoloSpaziale" gestendo gli eventuali errori

const lanciaVeicoloSpaziale = async (a, b, c) => {
    try {
        const moduloA = await caricaModulo(a)
        const moduloB = await caricaModulo(b)
        const moduloC = await caricaModulo(c)
        console.log(`${moduloA}...
${moduloB}...
${moduloC}...
Veicolo spaziale pronto per il lancio!`);
    } catch (error) {
        console.log(error.message);
    }
}

lanciaVeicoloSpaziale("Launch Escape System", "di comando e servizio", "lunare")