let board
let score = 0
let rows = 4
let columns = 4

document.addEventListener('DOMContentLoaded', () => {
    let box = document.querySelector(".dabba");
    let div = document.createElement("div");
    div.className = "w-24 h-24 bg-red-500";
    div.innerText = "2048";
    box.appendChild(div);
});

