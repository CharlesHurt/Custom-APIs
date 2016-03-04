'use strict'

var $GravatarButton
var $SquareButton
var $SumButton
var $SentenceButton
var $BirthdayButton

var $Gravatar
var $Square
var $Sum1
var $Sum2
var $Sum3
var $Sentence
var $Birthday

$(document).ready(init)

function init() {
  $GravatarButton = $('#IdGravatarButton')
  $SquareButton = $('#IdSquareButton')
  $SumButton = $('#IdSumButton')
  $SentenceButton = $('#IdSentenceButton')
  $BirthdayButton = $('#IdBirthdayButton')

  $Gravatar = $('#IdGravatar')
  $Square = $('#IdSquare')
  $Sum1 = $('#IdSum1')
  $Sum2 = $('#IdSum2')
  $Sum3 = $('#IdSum3')
  $Sentence = $('#IdSentence')
  $Birthday = $('#IdBirthday')

  $GravatarButton.click(requestGravatar)
  $SquareButton.click(requestSquare)
  $SumButton.click(requestSum)
  $SentenceButton.click(requestSentence)
  $BirthdayButton.click(requestBirthday)
}

function requestGravatar() {
  var request = ''
  request = '/gravatar/' + $Gravatar.val()
  makeRequest(request)
}

function requestSquare() {
  var request = ''
  request = '/square/' + $Square.val()
  makeRequest(request)
}

function requestSum() {
  var request = ''
  var SumPhrase = '/'
  var Sum1 = ($Sum1.val()).trim()
  if (Sum1.length !== 0) {
    SumPhrase += Sum1 + '/'
  }
  var Sum2 = ($Sum2.val()).trim()
  if (Sum2.length !== 0) {
    SumPhrase += Sum2 + '/'
  }
  var Sum3 = ($Sum3.val()).trim()
  if (Sum3.length !== 0)  {
    SumPhrase += Sum3 + '/'
  }

  request = '/sum/' + SumPhrase
  makeRequest(request)
}

function requestSentence() {
  var request = ''
  request = '/sentence/' + $Sentence.val()
  makeRequest(request)
}

function requestBirthday() {
  var request = ''
  request = '/birthday/' + $Birthday.val()
  makeRequest(request)
}

function makeRequest(request) {
  var promise = $.ajax({
    url: 'http://localhost:8000' + request
  })

  promise.done(function(data) { console.log(alert('result is:' + data)) });
  promise.fail(function(err) { console.log('An error occure while reading weather data:' + err)});
}
