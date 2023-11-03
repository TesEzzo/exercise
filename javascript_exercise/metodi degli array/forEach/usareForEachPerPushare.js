const arraySparse = [1, 3, 7];
let numCallbackRuns = 0;

arraySparse.forEach((arraySparse) => {
  console.log({arraySparse});
  numCallbackRuns++;
});
//per ogni index dentro arraySparce aggiunge 1+ nella numCallbackRuns
console.log({numCallbackRuns});

// { element: 1 }
// { element: 3 }
// { element: 7 }
// { numCallbackRuns: 3 }
