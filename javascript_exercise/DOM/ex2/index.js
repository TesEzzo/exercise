const $inputForm = document.querySelectorAll(".form-input")
const $inputFirstName = document.querySelector("#firstname")
const $inputLastName = document.querySelector("#lastname")
const $inputAge = document.querySelector("#age")

const person = {
    firstName: $inputForm[0].value,
    lastName: $inputForm[1].value,
    age: $inputForm[2].value,
}

console.log(person);