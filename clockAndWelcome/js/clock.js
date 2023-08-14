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

function getCurrentDay(number) {
    switch (number) {
        case 1: return "Pazartesi"
        case 2: return "Salı"
        case 3: return "Çarşamba"
        case 4: return "Perşembe"
        case 5: return "Cuma"
        case 6: return "Cumartesi"
        case 7: return "Pazar"
    }
}

function showTime() {

    let dateDOM = document.querySelector("#myClock")

    let date = new Date();
    let clock = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    let day = date.getDay();

    let currentDay = getCurrentDay(day);

    dateDOM.innerHTML = `${clock} ${currentDay}`;

}

let nameDOM = document.querySelector("#myName")
let input = prompt("Adınız Nedir?")
changeName(input);

setInterval(showTime, 1000);