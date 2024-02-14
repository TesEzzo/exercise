const sum = (a, b) => {
    if (typeof a === "number" && typeof b === "number") {
        return a + b
    } else {
        throw new Error("Write a number")
    }
}

console.log(sum(5, 6));