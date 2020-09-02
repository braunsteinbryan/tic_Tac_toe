'use strict'

const store = require('./../store')

const onSignUpSuccess = function (response) {
  console.log('response is', response)
  $('#message').text('Thanks for signing up ' + response.user.email + ' !')
  $('#sign-up-form').trigger('reset')
}

const onSignUpFailure = function (error) {
  console.log('error is', error)
  $('#message').text('Sign up failed. Try again!')
}

const onSignInSuccess = function (response) {
  console.log('response is', response)
  store.user = response.user
  $('#message').text('Thanks for signing in ' + response.user.email + ' !')
  $('#sign-in-form').trigger('reset')
  // $('#change-password-form').show()
  // $('#sign-up-form').hide()
  // $('#sign-in-form').hide()
}

const onSignInFailure = function (error) {
  console.log('error is', error)
  $('#message').text('Sign in failed. Try again!')
}

const onChangePasswordSuccess = function () {
  $('#message').text('Thanks for changing your password!')
  $('#change-password-form').trigger('reset')
}

const onChangePasswordFailure = function (error) {
  console.log('error is', error)
  $('#message').text('Change password failed. Try again!')
}

const onSignOutSuccess = function () {
  $('#message').text('Thanks for signing out!')
  $('#change-password-form').trigger('reset')
}

const onSignOutFailure = function (error) {
  console.log('error is', error)
  $('#message').text('Sign out failed. Try again!')
}

const onNewGameSuccess = function (response) {
  console.log('response is ', response)
  store.id = response.game._id
  $('.box').html('')
  $('#message').text('You have successfuly started a new game!')
  $('#change-password-form').trigger('reset')
}

const onNewGameFailure = function (error) {
  console.log('error is', error)
  $('#message').text('Game not started. Try again!')
}

const onUpdateGameSuccess = function (response) {
  console.log('response is ', response)
  // store.id = response.game
  $('#message').text('You have successfuly updated the game!')
  $('#change-password-form').trigger('reset')
}

const onUpdateGameFailure = function (error) {
  console.log('error is', error)
  $('#message').text('Game not updated. Try again!')
}

const onGetGamesSuccess = function (response) {
  store.games = response.games
  $('#message1').text('Thanks for looking up the games!')
  $('#change-password-form').trigger('reset')
}

const onGetGamesFailure = function (error) {
  console.log('error is', error)
  $('#message').text('Was unable to get the games you were looking for. Try again!')
}

module.exports = {
  onSignUpSuccess: onSignUpSuccess,
  onSignUpFailure: onSignUpFailure,
  onSignInSuccess: onSignInSuccess,
  onSignInFailure: onSignInFailure,
  onChangePasswordSuccess: onChangePasswordSuccess,
  onChangePasswordFailure: onChangePasswordFailure,
  onSignOutSuccess: onSignOutSuccess,
  onSignOutFailure: onSignOutFailure,
  onNewGameSuccess: onNewGameSuccess,
  onNewGameFailure: onNewGameFailure,
  onUpdateGameSuccess: onUpdateGameSuccess,
  onUpdateGameFailure: onUpdateGameFailure,
  onGetGamesSuccess: onGetGamesSuccess,
  onGetGamesFailure: onGetGamesFailure
}
