// query Selectors
var gameButtons = document.querySelectorAll(".selection")
var buttonsWrapper = document.querySelector(".game-buttons")
var changeGameButton = document.querySelector(".game-choice-button")
var easyGameRules = document.querySelector(".easy-rules")
var hardGameRules = document.querySelector(".hard-rules")
var rulesWrapper = document.querySelector(".rules-wrapper")
var textbox = document.querySelector(".text-box")
var rock = document.querySelector("#rock")
var paper = document.querySelector("#paper")
var scissors = document.querySelector("#scissors")
var lizard = document.querySelector("#lizard")
var alien = document.querySelector("#alien")
var mainSect = document.querySelector(".main-sect")
var humanScore = document.querySelector("#human-score")
var computerScore = document.querySelector("#computer-score")
var displayWinners = document.querySelector(".display-winner")

// Event listeners

easyGameRules.addEventListener("click", chooseEasyGame)
hardGameRules.addEventListener("click", chooseHardGame)
mainSect.addEventListener("click", easyGame)
changeGameButton.addEventListener("click", goHome)

// global variables
var human = createPlayer("human", "🤠")
var computer = createPlayer("computer", "🤖")

var easyOptions = ["rock", "paper", "scissors"]
var hardOptions = ["rock", "paper", "scissors", "lizard", "alien"]

function goHome() {
    show(rulesWrapper)
    hide(buttonsWrapper)
    textbox.innerText = `choose a game!`
}
function easyGame(event) {
    if (event.target.classList.contains("selection")) {
        var game = createEasyGame();
        game.human.selection = event.target.id;
        takeEasyTurn(game);
        displayFighters()
        determineEasyWinner(game);
        setTimeout(resetBoard, 2000)
        return game
    }
}

function hardGame(event) {
    if (event.target.classList.contains("selection")) {
        var game = createHardGame();
        game.human.selection = event.target.id;
        takeHardTurn(game);
        displayFighters()
        determineHardWinner(game);
        setTimeout(resetBoard, 2000)
        return game
    }
}
function displayFighters() {
    for (var i = 0; i < gameButtons.length; i++) {
        hide(gameButtons[i])
    }
    show(displayWinners)
    displayWinners.innerHTML =
        `<img src="assets/${human.selection}.png">
    <img src="assets/${computer.selection}.png">`
}

function chooseEasyGame() {
    show(rock);
    show(paper);
    show(scissors);
    hide(rulesWrapper)
    show(buttonsWrapper)
    textbox.innerText = `choose your fighter`
}

function chooseHardGame() {
    show(rock);
    show(paper);
    show(scissors);
    show(lizard);
    show(alien);
    hide(rulesWrapper);
    show(buttonsWrapper);
    textbox.innerText = `choose your fighter`
}

function createPlayer(name, token) {
    var player = {
        name: name,
        token: token,
        wins: 0,
        selection: ""
    }
    return player;
}

function createEasyGame() {
    var easyGameObject = {
        mode: "easy",
        human: human,
        computer: computer,
    }
    return easyGameObject
}

function createHardGame() {
    var hardGameObject = {
        mode: "hard",
        human: human,
        computer: computer,
    }
    return hardGameObject
}

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function takeEasyTurn(game) {
    if (game.mode === "easy") {
        var random = getRandomIndex(easyOptions)
        game.computer.selection = easyOptions[random]
    }
    return game
}

function takeHardTurn(game) {
    if (game.mode === "hard") {
        var random = getRandomIndex(hardOptions)
        game.computer.selection = hardOptions[random]
    }
    return game
}

    game.human.selection = "paper"
    return game
}
function determineEasyWinner(game) {
    var easyWinner = [
        'rock > scissors',
        'paper > rock',
        'scissors > paper'
    ]
    if (easyWinner.includes(`${game.human.selection} > ${game.computer.selection}`)) {
        game.human.wins += 1
        textbox.innerText = `human wins!`
    } else if (game.human.selection === game.computer.selection) {
        textbox.innerText = `DRAW!`
    } else {
        game.computer.wins += 1
        textbox.innerText = `computer wins!`
    }
    humanScore.innerText = `${game.human.wins}`
    computerScore.innerText = `${game.computer.wins}`
}

function determineHardWinner(game) {
        if (easyWinner.includes(`${game.human.selection} > ${game.computer.selection}`) ){
            game.human.wins += 1
            return 'human wins!'
        } else if (game.human.selection === game.computer.selection){
            return 'DRAW!'
        } else {
            game.computer.wins += 1
            return 'computer wins!'
        }
    }
    
function determineHardWinner(game) {   
    var hardWinner = [
        'rock > scissors',
        'rock > lizard',
        'paper > rock',
        'paper > alien',
        'scissors > paper',
        'scissors > lizard',
        'lizard > paper',
        'lizard > alien',
        'alien > scissors',
        'alien > rock'
    ]
    if (hardWinner.includes(`${game.human.selection} > ${game.computer.selection}`)) {
        game.human.wins += 1
        textbox.innerText = `human wins!`
    } else if (game.human.selection === game.computer.selection) {
        textbox.innerText = `DRAW!`
    } else {
        game.computer.wins += 1
        textbox.innerText = `computer wins!`
    }
}

function resetBoard() {
    displayWinners.innerHTML = "";
    var easyGame = createEasyGame()
    var hardGame = createHardGame()
    if (easyGame.mode === "easy") {
        for (var i = 0; i < 3; i++) {
            show(gameButtons[i])
        }
        show(changeGameButton)
        show(buttonsWrapper)
    } else if (hardGame.mode === "hard") {
        for (var i = 0; i < 5; i++) {
            show(gameButtons[i])
            show(lizard);
            show(alien);
        }
        goHome();
        show(changeGameButton);
        show(buttonsWrapper);
    }
}

function hide(element) {
    element.setAttribute("hidden", "")
}

function show(element) {
    element.removeAttribute("hidden")
        'alien > scissors', 
        'alien > rock'
    ]
    if (hardWinner.includes(`${game.human.selection} > ${game.computer.selection}`) ){
        game.human.wins += 1
        return 'human wins!'
    } else if (game.human.selection === game.computer.selection){
        return 'DRAW!'
    } else {
        game.computer.wins += 1
        return 'computer wins!'
    }
}

function resetBoard(game) {
    game.computer.wins = 0;
    game.human.wins = 0;
    return game
}