'use strict'

const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

let currentPlayer = 'X'
let activeGame = true
let gameBoard = ['', '', '', '', '', '', '', '', '']
let currentGameOver = false
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [2, 5, 8],
  [2, 4, 6],
  [0, 4, 8],
  [1, 4, 7]
]

const onSignUp = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.signUp(data)

    .then(ui.onSignUpSuccess)

    .catch(ui.onSignUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.signIn(data)

    .then(ui.onSignInSuccess)

    .catch(ui.onSignInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.changePassword(data)

    .then(ui.onChangePasswordSuccess)

    .catch(ui.onChangePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()

  api.signOut()

    .then(ui.onSignOutSuccess)

    .catch(ui.onSignOutFailure)
}

const onNewGame = function (event) {
  activeGame = true
  currentGameOver = false
  gameBoard = ['', '', '', '', '', '', '', '', '']
  currentPlayer = 'X'
  api.newGame()

    .then(ui.onNewGameSuccess)

    .catch(ui.onNewGameFailure)
}

const onGetGames = function () {
  api.gameHistory()

    .then(ui.onGetGamesSuccess)

    .catch(ui.onGetGamesFailure)
}

function updateGameState (data, dataId) {
  gameBoard[dataId] = currentPlayer
  data.innerHTML = currentPlayer
}

let gameInit = gameBoard.includes('')

function onLoad () {
  if (gameInit) {
    $('#message1').text('X goes first!')
  }
}
onLoad()

function whosTurn () {
  if (activeGame === false) {

  } else if (currentPlayer === 'X') {
    $('#message1').text("O's turn")
  } else if (currentPlayer === 'O') {
    $('#message1').text("X's turn")
  }
}

const boardClick = function (event) {
  const dataId = event.target.id // targeting my different divs Id's based on click
  const data = event.target // targeting different divs (HTML elements) based on click

  if (gameBoard[dataId] !== '' || !activeGame || currentGameOver === true) { //
    $('#message1').text('This is an invalid square!')
  } else {
    updateGameState(data, dataId)
    gameFinish()
    const gameObject = {
      game: {
        cell: {
          index: dataId,
          value: currentPlayer
        },
        over: currentGameOver
      }
    }
    api.updateGame(gameObject)

      .then(ui.onUpdateGameSuccess)

      .catch(ui.onUpdateGameFailure)
    if (currentPlayer === 'X') { // conditional to change players
      currentPlayer = 'O'
    } else {
      currentPlayer = 'X'
    }
  }
}

function gameFinish () { // determines when the game should be over
  for (let i = 0; i < winningCombos.length; i++) { // loops through my winning combos array
    const checkWin = winningCombos[i] // putting all iterations of my winning combos array into a var
    let search1 = gameBoard[checkWin[0]] // crosschecking all possibilites of the winning combos array against the gameBoard possibilites
    let search2 = gameBoard[checkWin[1]]
    let search3 = gameBoard[checkWin[2]]

    if (search1 === search2 && search2 === search3 && search1 !== '') {
      currentGameOver = true
    }

    if (currentGameOver === true) { // if this scenario is true
      $('#message1').text(currentPlayer + ' wins!')
      activeGame = false // the game is actually over
    }

    let currentGameTied = !gameBoard.includes('')
    if (currentGameTied === true && activeGame === true) {
      $('#message1').text('The Game has been tied! Play again!')
      activeGame = false
    }
  }
  whosTurn()
}

module.exports = {
  onSignUp: onSignUp,
  onSignIn: onSignIn,
  onChangePassword: onChangePassword,
  onSignOut: onSignOut,
  onNewGame: onNewGame,
  boardClick: boardClick,
  onLoad: onLoad,
  onGetGames: onGetGames
}
