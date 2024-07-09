let totalValue = 0
function increase() {
    counter.textContent = parseInt(counter.textContent) + 1
}
function save() {
    let newStringtoBeAdded = counter.innerText + " - ";
    entries.textContent += newStringtoBeAdded;
    totalValue += parseInt(counter.innerText);
    total.textContent = "the total value is " + totalValue;
    counter.innerText = 0;
}


