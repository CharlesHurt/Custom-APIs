'use strict'

const PORT = 8000
var md5 = require('md5')
var http = require('http');
var jquery = require('./jquery.js') // Remove this

var server = http.createServer(function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Request-Method', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
  res.setHeader('Access-Control-Allow-Headers', '*');

  if (req.url.includes('/gravatar')) {
    handleGravatar(req, res)
  } else if (req.url.includes('/square')) {
    handleSquare(req, res)
  } else if (req.url.includes('/sum')) {
    handleSum(req, res)
  } else if (req.url.includes('/sentence')) {
    handleSentence(req, res)
  } else if (req.url.includes('/birthday')) {
    handleBirthday(req, res)
  } else {
    res.status(404)
    res.end()
  }
});

function handleGravatar(req, res) {
  var gravatarEmail = req.url.slice('/gravatar/'.length)
  var md5Email = md5(gravatarEmail)
  getGravatar(md5Email, req, res)
}

function getGravatar(md5Email, req, res) {
  // This need to be vanilla JS not jquery
  var promise = $.ajax({
    url: 'http://www.gravatar.com/avatar/' + md5Email
  })

  promise.done(function(data, req, res) {
    res.end(data)
  });
  promise.fail(function(err) { console.log('An error occure while reading weather data:' + err)});
}

function handleSquare(req, res) {
  var num = req.url.slice('/Squarl/'.length)
  res.end(num * num)
}

function handleSum(req, res) {
  var num = req.url.slice('/sum/'.length).split('/')
  var result = num.reduce(function(running, cur, index, arr) {
    return running += (cur * 1)
  }, 0)
  res.end(result)
}

function handleSentence(req, res) {
  res.end('res Sentence')
}

function handleBirthday(req, res) {
  res.end('res Birthday')
}

server.listen(PORT);
