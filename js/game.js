'use strict'

const WALL = '&#8251;'
const FOOD = '&middot;'
const EMPTY = ' '

const gGame = {
    score: 0,
    isOn: false
}
var gBoard

function init() {
    console.log('hello')

    gBoard = buildBoard()

    createPacman()
    createGhosts()
    
    renderBoard(gBoard, '.board-container')
    gGame.isOn = true
}

function buildBoard() {
    const size = 10
    const board = []

    for (var i = 0; i < size; i++) {
        board.push([])

        for (var j = 0; j < size; j++) {
            board[i][j] = FOOD
            
            if (i === 0 || i === size - 1 || j === 0 || j === size - 1) {
                board[i][j] = WALL
            }
        }
    }
    board[5][3] = board[6][3] = board[7][3] = WALL
    return board
}

function updateScore(diff) {
    // Model
    gGame.score += diff

    // DOM
    const elScore = document.querySelector('.score span')
    elScore.innerText = gGame.score
}

function gameOver() {
    gGame.isOn = false
    console.log('Game Over')
}