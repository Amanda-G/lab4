let buttonContainer = document.querySelector(".button-container")
let currentTotal = 0;
let total = document.querySelector(".total");

buttonContainer.addEventListener("click", (event) => {
    // if (event.target.classList.contains("cola")) {
    //     currentTotal += 2;
    //     total.innerText = `Total: $${currentTotal}.00`;

    // } else if (event.target.classList.contains("peanuts")) {
    //     currentTotal += 3;
    //     total.innerText = `Total: $${currentTotal}.00`;
    // }else if (event.target.classList.contains("chocolate")) {
    //     currentTotal += 4;
    //     total.innerText = `Total: $${currentTotal}.00`;
    // }else if (event.target.classList.contains("gummies")) {
    //     currentTotal += 3;
    //     total.innerText = `Total: $${currentTotal}.00`;
    // }
    if (event.target.classList.contains("button")) {
        let amount = Number(event.target.getAttribute("data-amount"));
        console.log(amount)
        currentTotal += amount;
        total.innerText = `Total: $${currentTotal.toFixed(2)}`
    }
})

let coinForm = document.querySelector(".form");
let coinContainer = document.querySelector(".coin-container")
coinForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(coinForm);
    let amount = data.get("amount")
    let coin = data.get("coin")
    console.log(amount, coin)
    for (let i = 0; i < amount; i++) {
        let coinDiv = document.createElement("div");
        coinDiv.classList.add("coin-div")
        coinDiv.innerText = coin;
        coinContainer.append(coinDiv);
    }
    coinForm.reset();
})

coinContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("coin-div")) {
        event.target.remove();
    }
})

let light = document.querySelector(".light-container");
let bulb = document.querySelector(".light-bulb")
light.addEventListener("click", (event) => {
    event.preventDefault;
    if (event.target.classList.contains("on")) {
        bulb.style.backgroundColor = "lightgrey";
    } else if (event.target.classList.contains("off")) {
        bulb.style.backgroundColor = "rgb(80,77,77)";
    }
})

let toggleButton = document.querySelector(".toggle");
//use ontoggle??? 
//ontoggle = funciton()
// does not work. couldn't figure out
// toggleButton.ontoggle = function () {
//     if (bulb.style.backgroundColor = "rgb(80,77,77)") {
//         bulb.style.backgroundColor = "lightgrey";
//     } else if (bulb.style.backgroundColor = "lightgrey") {
//         bulb.style.backgroundColor = "rgb(80,77,77)";
//     }
// }


let button = document.querySelector(".button")
light.addEventListener("click", (event) => {
    event.preventDefault;
    if (event.target.classList.contains("end")) {
        bulb.style.display = "none";
        button.disabled = true;
    }
})
