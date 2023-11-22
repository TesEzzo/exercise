let success = Math.random() * (1 - 0 + 0)+0;

const fetchDataFromAPI = (number) => new Promise((resolve, reject) => {
    if (number > 0.5) {
        return resolve("Data retrieved successfully")
    } else {
        return reject(new Error("Failed to fetch data"))
    }
})

const init = async () => {
    try {
        let result=await fetchDataFromAPI(success)
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
}

console.log(success);
init()
