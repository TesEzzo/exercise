const $btnDarkMode = document.querySelector(".btn")
const $body = document.querySelector("body")

$btnDarkMode.addEventListener("click", () => {
    $body.classList.toggle("theme")
})