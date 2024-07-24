let board
const rows = 4
const columns = 4
let score = 0

window.onload = function () {
    createGame()
}

function createGame() {
    board = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
    for (let currentRow = 0; currentRow < rows; currentRow++) {
        for (let currentColumn = 0; currentColumn < columns; currentColumn++) {
            let tile = document.createElement("div")
            tile.id = `${currentRow}-${currentColumn}`
            let num = board[currentRow][currentColumn]
            updateTile(tile, num)
            document.getElementById("gamebox").append(tile)
        }
    }
    SetTwo()
    SetTwo()
}

function updateTile(tile, num) {
    tile.innerText = ""
    tile.className = ""
    tile.classList.add("tiles")
    if (num > 0) {
        tile.innerText = num;
    }
}

document.addEventListener("keyup", (e) => {
    if (e.code === "ArrowLeft") {
        slideLeft()
        SetTwo()
    }
    else if (e.code === "ArrowRight") {
        slideRight()
        SetTwo()
    }
    else if (e.code === "ArrowUp") {
        slideUp()
        SetTwo()
    }
    else if (e.code === "ArrowDown") {
        slideDown()
        SetTwo()
    }
    document.getElementById("score").innerText = score
})

function hasEmptyTile() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            if (board[r][c] === 0) {
                return true
            }
        }
    }
    return false
}


function SetTwo() {
    if (!hasEmptyTile()) {
        alert("Game has ended. Resetting the game...");
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < columns; c++) {
                board[r][c] = 0;
                let tile = document.getElementById(`${r}-${c}`);
                let num = board[r][c]
                updateTile(tile, num)
                document.getElementById("score").innerText = 0

            }
        }
    }
    let found = false
    let r = Math.floor(Math.random() * rows)
    let c = Math.floor(Math.random() * columns)
    if (board[r][c] == 0) {
        board[r][c] = 2
        let tile = document.getElementById(`${r}-${c}`)
        tile.innerText = "2";
        found = true
    }
}


function Filterzero(row) {
    return row.filter(num => num != 0) // creates new array without any zeroes
}

function slide(row) {
    // [0,2,2,2]
    row = Filterzero(row) // => [2,2,2]

    // slide

    for (let index = 0; index < row.length - 1; index++) {
        if (row[index] == row[index + 1]) {
            row[index] *= 2
            row[index + 1] = 0
            score += row[index] // Update score here
        } // => 4 [4,0,2]
        row = Filterzero(row) //=> [4,2]
    }

    // add zeroes back

    while (row.length < columns) {
        row.push(0)
    } // => [4,2,0,0]

    return row

}

function slideLeft() {
    for (let r = 0; r < rows; r++) {
        let row = board[r];
        row = slide(row)
        board[r] = row

        for (let c = 0; c < columns; c++) {
            let tile = document.getElementById(`${r}-${c}`)
            let num = board[r][c]
            updateTile(tile, num)
        }
    }
}

function slideRight() {
    for (let r = 0; r < rows; r++) {
        let row = board[r];
        row.reverse()
        row = slide(row)
        row.reverse()
        board[r] = row

        for (let c = 0; c < columns; c++) {
            let tile = document.getElementById(`${r}-${c}`)
            let num = board[r][c]
            updateTile(tile, num)
        }
    }
}

function slideUp() {
    for (let c = 0; c < columns; c++) {
        let row = [board[0][c], board[1][c], board[2][c], board[3][c]];
        row = slide(row)

        for (let r = 0; r < rows; r++) {
            board[r][c] = row[r]
            let tile = document.getElementById(`${r}-${c}`)
            let num = board[r][c]
            updateTile(tile, num)
        }
    }
}

function slideDown() {
    for (let c = 0; c < columns; c++) {
        let row = [board[0][c], board[1][c], board[2][c], board[3][c]];
        row.reverse()
        row = slide(row)
        row.reverse()

        for (let r = 0; r < rows; r++) {
            board[r][c] = row[r]
            let tile = document.getElementById(`${r}-${c}`)
            let num = board[r][c]
            updateTile(tile, num)
        }
    }
}

