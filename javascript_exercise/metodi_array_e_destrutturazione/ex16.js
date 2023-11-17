const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const mergedObject = {
    ...obj1,
    ...obj2,
}

console.log(mergedObject);

const mergedObject2= {
    ...obj1,
    ...obj2,
    b: 2,
    c: 3,
    d: 4,
}

console.log(mergedObject2);