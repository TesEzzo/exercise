let bancoFrutta = [
    {nome: "uva", prezzo:1.8},
    {nome: "limone", prezzo:2.3},
    {nome: "mela", prezzo:0.5},
    {nome: "kiwi", prezzo:5},
    {nome: "lime", prezzo:3.2},
    {nome: "arancia", prezzo:0.9},
    {nome: "banana", prezzo:1},
    {nome: "fragola", prezzo:0.3},
];

function prezziInOrdine(frutta) {
    bancoFrutta.sort((a,b) => a.prezzo - b.prezzo)
    return console.log(bancoFrutta);
}

prezziInOrdine(bancoFrutta)