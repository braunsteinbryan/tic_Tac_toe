
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

module.exports = {
  onSignUpSuccess: onSignUpSuccess,
  onSignUpFailure: onSignUpFailure
}
