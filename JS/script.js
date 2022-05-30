let wrapper = document.querySelector(".wrapper");
let clicks = 0;
let isalert = false;
let isplayer1 = true;
let text = 'X';
let dis = document.querySelector("#displayChance");
let reset = document.getElementById("reset").addEventListener("click",function(){
    window.location.reload();
})

let containerChecks = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];
function createBoard() {
    let table = document.createElement("table");
    let countCells = 0;
    for (let i = 1; i <= 3; i++) {
        let tr = document.createElement("tr");
        for (let j = 1; j <= 3; j++) {
            countCells = countCells + 1;
            let td = document.createElement("td");
            let btn = document.createElement("button");
            btn.addEventListener("click", startGame);
            btn.textContent = "";
            td.setAttribute("id", countCells);
            tr.appendChild(td);
            td.appendChild(btn);
        }
        table.appendChild(tr);
    }
    wrapper.appendChild(table);
}
createBoard();
let btns = document.getElementsByTagName("td");
for (let i = 0; i < btns.length; i++) {
    btns[i] = btns[i].firstElementChild;
}
function checker() {
    for (let i = 0; i < containerChecks.length; i++) {
        let count = 0;
        for (let j = 0; j < containerChecks[i].length; j++) {
            let value = containerChecks[i][j];
            let content = btns[value - 1].firstElementChild.textContent;
            if (content == text) {
                count = count + 1;
            }
        }
        if (count == 3) {
            if (isplayer1) {
                alert("Congratulations! Player2 wins");
            }
            else {
                alert("Congratulations! Player1 wins");
            }
            isalert = true;
            removeAll();
        }
    }
}

function startGame(event) {
    event.target.style.cssText=" background: rgb(161, 209, 236); background: radial-gradient(circle, rgba(161, 209, 236, 1) 2%, rgba(172, 227, 238, 1) 25%, rgba(174, 230, 238, 1) 31%, rgba(112, 213, 223, 1) 39%, rgba(159, 232, 229, 1) 68%, rgba(160, 236, 208, 1) 100%, rgba(148, 187, 233, 1) 100%)";
    if (isplayer1) {
        isplayer1 = false;
        text = 'X';
        event.target.textContent = text;
        dis.textContent = "Player 2's Chance";

    }
    else {
        isplayer1 = true;
        text = 'O';
        event.target.textContent = text;
        dis.textContent = "Player 1's Chance";
        
    }
    clicks = clicks + 1;
    checker();
    if (!isalert && clicks == 9) {
        alert("Draw!");
        removeAll();
    }
}

function removeAll() {
    for (let i = 0; i < btns.length; i++) {
        let content = btns[i].firstElementChild;
        content.removeEventListener("click", startGame);
    }
}

