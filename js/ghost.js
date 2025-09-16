'use strict'

const GHOST = '&#9781'

var gGhosts = []
var gGhostsInterval

function createGhosts() {
    // TODO: Create 3 ghosts and an interval
    for (var i = 0; i < 3; i++){
        createGhost()
    }
    gGhostsInterval = setInterval(moveGhosts, 1000)
}

function createGhost() {
    // TODO: Create a ghost with arbitrary start pos & currCellContent
    const ghost = {
        pos: { i: 3, j: 5 },
        currCellContent: FOOD,
    }

    // TODO: Add the ghost to the ghosts array
    gGhosts.push(ghost)

    // TODO: Update the board
    gBoard[ghost.pos.i][ghost.pos.j] = GHOST
}

function moveGhosts() {
    // TODO: loop through ghosts
    for (var i = 0; i < gGhosts.length; i++){
        moveGhost(gGhosts[i])
    }
}

function moveGhost(ghost) {
    // TODO: figure out moveDiff, nextLocation, nextCell
    const moveDiff = getMoveDiff()
    const nextPos = {
        i: ghost.pos.i + moveDiff.i,
        j: ghost.pos.j + moveDiff.j,
    }
    // const nextCell = gBoard[nextPos.i][nextPos.j]

    // TODO: return if cannot move
    if (gBoard[nextPos.i][nextPos.j] === WALL) return
    if (gBoard[nextPos.i][nextPos.j] === GHOST) return
    
    // TODO: hitting a pacman? call gameOver
    if (gBoard[nextPos.i][nextPos.j] === PACMAN) {
        gameOver()
        return
    }

    // TODO: moving from current location:
    // TODO: update the model (restore prev cell contents)
    gBoard[ghost.pos.i][ghost.pos.j] = ghost.currCellContent
    
    // TODO: update the DOM
    renderCell(ghost.pos, ghost.currCellContent)
    
    // TODO: Move the ghost to new location:
    // TODO: update the model (save cell contents so we can restore later)
    ghost.pos = nextPos
    ghost.currCellContent = gBoard[nextPos.i][nextPos.j]
    gBoard[nextPos.i][nextPos.j] = GHOST
    
    // TODO: update the DOM
    renderCell(ghost.pos, GHOST)
}

function getMoveDiff() {
    const randNum = getRandomIntInclusive(1, 4)

    switch (randNum) {
        case 1: return { i: 0,  j: 1  }
        case 2: return { i: 1,  j: 0  }
        case 3: return { i: 0,  j: -1 }
        case 4: return { i: -1, j: 0  }
    }
}

function getGhostHTML(ghost) {
    return `<span>${GHOST}</span>`
}