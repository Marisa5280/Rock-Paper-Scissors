// query Selectors
// var gameSection = document.querySelectorAll(".game-buttons")

// Event listeners

// global variables

var easyOptions = ["rock", "paper", "scissors"]
var hardOptions = ["rock", "paper", "scissors", "lizars", "alien"]
var game = createGame(); 

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
        mode: "easy",
        human: human,
        computer: computer,
    }
    return gameObject
}

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function takeTurn(game) {
    if(game.mode === "easy"){
        var random = getRandomIndex(easyOptions)
        game.computer.selection = easyOptions[random]
    }
}