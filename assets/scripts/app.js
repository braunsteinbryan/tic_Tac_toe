'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events')

$(() => {
  $('#message1').on('load', authEvents.onLoad)
  $('#0').on('click', authEvents.boardClick)
  $('#1').on('click', authEvents.boardClick)
  $('#2').on('click', authEvents.boardClick)
  $('#3').on('click', authEvents.boardClick)
  $('#4').on('click', authEvents.boardClick)
  $('#5').on('click', authEvents.boardClick)
  $('#6').on('click', authEvents.boardClick)
  $('#7').on('click', authEvents.boardClick)
  $('#8').on('click', authEvents.boardClick)
  $('.box').on('click', authEvents.onUpdateGame)
  $('#get-games').on('click', authEvents.onGetGames)
  $('#new-game').on('click', authEvents.onNewGame)
  $('#sign-out-link').on('click', authEvents.onSignOut)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').hide()
  $('#sign-out-link').hide()
  $('#new-game').hide()
  $('#get-games').hide()
  $('#game-details').hide()
})
