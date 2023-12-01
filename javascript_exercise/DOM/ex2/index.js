const $inputForm = document.querySelectorAll(".form-input");
const $form = document.querySelector("form");

const person= JSON.stringify({
    firstName: $inputForm[0].value,
    lastName: $inputForm[1].value,
    age: $inputForm[2].value,
})

const formModify = () => {
   return $form.setAttribute("data-person", "person")
}

formModify()
console.log(person);

//in collaborazione con Raffaele