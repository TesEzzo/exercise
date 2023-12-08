const $img = document.querySelector("img");
const $h2Title = document.querySelector("h2");
const $paragraphTraits = document.querySelector("p");



const fetchData = async () => {
    try {
        const responce = await fetch("https://ringsdb.com/api/public/card/01001.json?_format=json%27",{ method: "GET" }) //di normalmente il fetch usa come metodo di defalut il GET ma lo metto uguale per best practice
        const data = await responce.json()
        console.log(data);
        if (typeof data === "object") {
            const img = data.imagesrc;
            const traits = data.traits;
            const name = data.name;

            $img.setAttribute("src", `https://ringsdb.com${img}`);
            $h2Title.innerText = name;
            $paragraphTraits.innerText = `Traits: ${traits}`;
        } else if (!responce.ok) {
            throw new Error("404: dato non trovato")
        } else {
            throw new Error("O-01: il dato non è un oggetto");
        }
    } catch (error) {
        console.log(error.message);
    }
}

fetchData()

//a riga 9 se vuoi vedere una card differente basta cambiare il numero della card ad esempio apposto di "01001" cambia in "01002"