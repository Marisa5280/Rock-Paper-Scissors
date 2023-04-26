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

// Event listeners

easyGameRules.addEventListener("click", chooseEasyGame)
hardGameRules.addEventListener("click", chooseHardGame)
mainSect.addEventListener("click", easyTest)

// global variables

var easyOptions = ["rock", "paper", "scissors"]
var hardOptions = ["rock", "paper", "scissors", "lizard", "alien"]
var game = createGame();

function easyTest(event) {
    if (event.target.classList.contains("selection")){
        createGame();
        game.human.selection = event.target.id
    }
    console.log(game.human)
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

function createGame() {
    var human = createPlayer("human", "🤠")
    var computer = createPlayer("computer", "🤖")
    var gameObject = {

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
        return 'human wins!'
    } else if (game.human.selection === game.computer.selection) {
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
        return 'human wins!'
    } else if (game.human.selection === game.computer.selection) {
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

function hide(element) {
    element.setAttribute("hidden", "")
}

function show(element) {
    element.removeAttribute("hidden")
}