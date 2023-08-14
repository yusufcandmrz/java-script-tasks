let nameDOM = document.querySelector("#myName")

const changeName = (name = "") => {
    if (name == null) {
        name = "";
    }
    if (name == "") {
        console.log(name)
    }
    else {
        console.log(`${name}!`)
        nameDOM.innerHTML = `${name}!`
    }
}

let input = prompt("Adınız Nedir?")

changeName(input);