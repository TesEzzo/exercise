//prendere un array di numeri restituirli per ogni numero pari

function countEavenNumbers(nums){
    let pari=[]
    for (let index = 0; index < nums.length; index++) {
       if (nums[index] % 2 === 0) {
        pari.push(nums[index])
       }
        
    }
    return pari.length
}

console.log(countEavenNumbers([1,2,3,4,5,6,7,8]));