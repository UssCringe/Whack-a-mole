let game = document.querySelector(".game")
const container = document.querySelector(".container")
const columnCount = 5 
const holes =   [1, 2, 3, 4, 
                5, 6, 7, 8, 9, 
                10, 11, 12, 13, 14, 
                15, 16, 17, 18, 19, 20]

let random_hole;
let random_timer;
let mole_interval;
let misses = 0
let hits = 0



updateView()
function updateView(){
    container.innerHTML = `
    <h1>WHACK A MOLE</h1>
        <div class="spans">
        <span>${"Hits: " + hits}</span>
        <span>${"Misses: " + misses}</span>
        </div>
    <button onclick="start()" class="btn">start</button>
    <div class="game"></div>`
    let html = ""
    for (let i of holes){
        html += `<div onclick="checkMole(this)" class="hole ${i == random_hole? "mole" : ""}">${i}</div>`
    }
    let game = document.querySelector(".game")
    game.innerHTML = html;
    game.style.display = 'grid';
    game.style.gridTemplateColumns = `repeat(${columnCount},120px)`;
}




function start(){
    random_timer = generateRandomIntInRange(400, 800)
    clearInterval(mole_interval)
    mole_interval = setInterval(insertMole, random_timer)
}

function insertMole(){
    random_hole = generateRandomIntInRange(1, 20);
    updateView()
}

function checkMole(divEl){
    random_timer = generateRandomIntInRange(400, 800)
    clearInterval(mole_interval)
    if (divEl.classList.contains("mole")){
        divEl.classList.remove("mole")
        divEl.classList.add("green")
        hits ++}
        
    else {divEl.classList.add("red")
          misses ++}

    setTimeout(500)
    mole_interval = setInterval(insertMole, random_timer)
    console.log(random_timer)
}

function generateRandomIntInRange(min, max) {
    return (Math.floor(Math.random() * (max - min + 1)) + min);}