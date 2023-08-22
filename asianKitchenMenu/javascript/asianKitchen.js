let menuDOM = document.querySelector("#menu");
let allButtonDOM = document.querySelector("#all-button")
let koreaButtonDOM = document.querySelector("#korea-button")
let japanButtonDOM = document.querySelector("#japan-button")
let chinaButtonDOM = document.querySelector("#china-button")

allButtonDOM.addEventListener("click", handleButton)
koreaButtonDOM.addEventListener("click", handleButton)
japanButtonDOM.addEventListener("click", handleButton)
chinaButtonDOM.addEventListener("click", handleButton)

let items = menu.copyWithin();
handleItem(items);

function handleItem() {

    for (let index = 0; index < items.length; index++) {

        let itemContainer = document.createElement("li");
        let itemInfo = document.createElement("span");
        let itemImage = document.createElement("img");
        let itemTitleContainer = document.createElement("h4");
        let itemTitle = document.createElement("span");
        let itemPrice = document.createElement("span");
        let itemDescription = document.createElement("span");

        itemContainer.classList.add("menu-items")
        itemInfo.classList.add("menu-info")
        itemImage.classList.add("photo")
        itemTitleContainer.classList.add("menu-title")
        itemTitle.classList.add("h4")
        itemPrice.classList.add("h4")
        itemDescription.classList.add("menu-text")

        itemImage.src = items[index].img;
        itemTitle.textContent = items[index].title;
        itemPrice.textContent = items[index].price;
        itemDescription.textContent = items[index].desc

        itemTitleContainer.append(itemTitle)
        itemTitleContainer.append(itemPrice)
        itemInfo.append(itemTitleContainer)
        itemInfo.append(itemDescription)
        itemContainer.append(itemImage)
        itemContainer.append(itemInfo)

        menuDOM.append(itemContainer)
    }
}

function handleButton() {

    let filteredItems = []

    if (this.textContent == "All") {
        filteredItems = menu.copyWithin();
    }
    else if (this.textContent == "Korea") {
        filteredItems = menu.filter(item => item.category == "Korea")
    }
    else if (this.textContent == "Japan") {
        filteredItems = menu.filter(item => item.category == "Japan")
    }
    else if (this.textContent == "China") {
        filteredItems = menu.filter(item => item.category == "China")
    }
    else {
        console.log("Hatalı İşlem")
    }
    menuDOM.innerHTML = "";

    items = filteredItems.copyWithin()
    handleItem(items)
}