const fetchDataFromAPI = (func) => new Promise((resolve, reject) => {
    if (func.name.length >= 2 && func.age > 0) {
        return resolve(func);
    } else {
        return reject(new Error("inserire parametro"));
    }
})

const init = async () => {
    try {
        const user = await fetchDataFromAPI(handleData());
        console.log(user);
    } catch (error) {
        console.log(error);
    }
}

init()

function handleData() {
    const user = { name: "John", age: 30 };
    return user
}

fetchDataFromAPI(handleData());

// const fetchDataFromAPI = async () => {
//     try {
//         const result = await handleData();
//         if (result.name == false || result.age == false) {
//             throw new Error("inserire parametro");
//     }
//     console.log(result);
// }
//      catch (error) {
//         console.log(error);
//     }
// }


//nel video del modulo ha usato then e catch però uso il tuo metodo per farti felice :)