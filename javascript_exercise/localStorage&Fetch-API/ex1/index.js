const $inputEmail = document.querySelector(".email");
const $inputFirstname = document.querySelector(".firstname");
const $inputLastname = document.querySelector(".lastname");
const $inputUser =document.querySelectorAll("input");
const $btnSave = document.querySelector(".btn");
const $spanTitleName = document.querySelector(".title-name");
const $paragraphError = document.querySelector(".error");


const data = (userdata) => {
    $spanTitleName.innerText = userdata;

};

$btnSave.addEventListener("click", () => {
    data($inputFirstname.value);
    localStorage.setItem("email", $inputEmail.value);
    localStorage.setItem("first-name", $inputFirstname.value);
    localStorage.setItem("last-name", $inputLastname.value);
    savedData();
});

const savedData = () => {
    const email = localStorage.getItem("email");
    const firstName = localStorage.getItem("first-name");
    const lastName = localStorage.getItem("last-name");


    if (email && firstName && lastName) {
        data(firstName)
        $inputEmail.setAttribute("value", `${email}`);
        $inputFirstname.setAttribute("value", `${firstName}`);
        $inputLastname.setAttribute("value", `${lastName}`);
    } else {
        data("");
        $paragraphError.innerText = "Inserire tutte le credenziali";
        setTimeout(() => {
            $paragraphError.innerText = ""
        },2000);
    } 
};