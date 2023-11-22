const fetchDataFromAPI = (func) => new Promise((resolve, reject) => {setTimeout(()=>{
    if (func.name.length >= 2 && func.age > 0) {
        return resolve(func);
    } else {
        return reject(new Error("inserire parametro"));
    }
},2000)
    
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