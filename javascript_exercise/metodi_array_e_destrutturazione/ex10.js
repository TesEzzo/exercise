const student = {
    info: { name: "Bob", age: 25 },
    grades: { math: 95, science: 89 }
  };

const {info} = student;
const {name,age} = info;

const {grades} = student;
const {math,science} = grades;

console.log(`Nome:${name},
Età:${age},
Voti:
matematica=${math},
scienza=${science}.`);

//In collaborazione con Sangregorio