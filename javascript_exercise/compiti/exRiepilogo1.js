const studenti = [
    { nome: "Alice", voto: 95 },
    { nome: "Bob", voto: 88 },
    { nome: "Carol", voto: 76 },
    { nome: "David", voto: 92 },
    { nome: "Eve", voto: 84 },
  ];

  //forEach
  studenti.forEach(element=> console.log(element.nome));
  //Find
  const find= studenti.find(element => element.voto > 90);
  console.log(find);
  //reduce
  const somma= studenti.reduce((a, studente) => a + studente.voto, 0);
  const reduce= somma / studenti.length;
  console.log(reduce);
  //Map
  const map= studenti.map(studente => studente.nome.toUpperCase());
  console.log(map);
  //filter
  const filter= studenti.filter(studente => studente.voto > 85);
  console.log(filter);