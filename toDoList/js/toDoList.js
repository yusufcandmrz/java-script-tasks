let taskDOM = document.querySelector("#task")
let listDOM = document.querySelector("#list")

function checkedElement() {
    let buttonElement = document.createElement("button")
    buttonElement.textContent = "X";
    buttonElement.addEventListener("click", removeElement)

    if (this.classList.contains("checked")) {
        this.classList.remove("checked")
        let existingButton = this.querySelector("button");
        if (existingButton) {
            existingButton.remove();
        }
    }
    else {
        this.classList.add("checked")
        this.append(buttonElement);
    }
}

function removeElement() {
    let parentElement = this.parentElement;
    listDOM.removeChild(parentElement);
}

function newElement() {
    if (taskDOM.value.trim() == "") {
        $('#error-toast').toast('show');
    }
    else {

        let liElement = document.createElement("li")
        liElement.innerHTML = taskDOM.value;
        liElement.addEventListener("click", checkedElement)

        listDOM.append(liElement);
        taskDOM.value = "";

        $('#success-toast').toast('show');
    }
}

