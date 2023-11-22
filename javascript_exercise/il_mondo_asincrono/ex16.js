// function callback_BasedFunction(arg1, arg2, callback) {
//     setTimeout(() => {
//         const result = arg1 + arg2;
//         if (result % 2 !== 0) {
//             callback(null, result);
//         } else {
//             callback(new Error('Result is not odd!'), null);
//         }
//     }, 1000);
// }

const promiseConversion = (arg1, arg2) => new Promise((resolve, reject) => {
    setTimeout(() => {
        const result = arg1 + arg2;
        if (result % 2 !== 0) {
            return resolve(result);
        } else {
            return reject(new Error('Result is not odd!'));
        }
    })
}, 1000);

const init = async (arg1, arg2) => {
    try {
        let odd = await promiseConversion(arg1, arg2)
        console.log(odd);
    } catch (error) {
        console.log(error.message);
    }
}

init(10, 5)