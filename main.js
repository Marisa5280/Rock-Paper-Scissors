// query Selectors
// var gameSection = document.querySelectorAll(".game-buttons")

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
    game.human.selection = "paper"
    return game
}
function determineEasyWinner(game) {
    var easyWinner = [
        'rock > scissors',
        'paper > rock',
        'scissors > paper'
    ]
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