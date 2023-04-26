// query Selectors
var gameButtons = document.querySelector(".selection")
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

// Event listeners

easyGameRules.addEventListener("click", chooseEasyGame)
hardGameRules.addEventListener("click", chooseHardGame)
mainSect.addEventListener("click", easyTest)

// global variables

var easyOptions = ["rock", "paper", "scissors"]
var hardOptions = ["rock", "paper", "scissors", "lizard", "alien"]


function easyTest(event) {
    if (event.target.classList.contains("selection")){
        var game = createEasyGame();
        game.human.selection = event.target.id;
        takeTurn(game);
        determineEasyWinner(game);
    } else {
        var game = createHardGame();
        game.human.selection = event.target.id;
        takeTurn(game);
        determineHardWinner(game);
    }
    console.log(game)
    return game
}

function chooseEasyGame() {
    show(rock);
    show(paper);
    show(scissors);
    hide(rulesWrapper)
    textbox.innerText = `choose your fighter`
}

function chooseHardGame() {
    show(rock);
    show(paper);
    show(scissors);
    show(lizard);
    show(alien);
    hide(rulesWrapper)
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
    var human = createPlayer("human", "🤠")
    var computer = createPlayer("computer", "🤖")
    var gameObject = {
        mode: "easy",
        human: human,
        computer: computer,
    }
    return gameObject
}

function createHardGame() {
    var human = createPlayer("human", "🤠")
    var computer = createPlayer("computer", "🤖")
    var gameObject = {
        mode: "hard",
        human: human,
        computer: computer,
    }
    return gameObject
}

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function takeTurn(game) {
    if (game.mode === "easy") {
        var random = getRandomIndex(easyOptions)
        game.computer.selection = easyOptions[random]
    }
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

function resetBoard(game) {
    
    return game
}

function hide(element) {
    element.setAttribute("hidden", "")
}

function show(element) {
    element.removeAttribute("hidden")
}