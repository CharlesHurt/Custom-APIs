'use strict'

const PORT = 8000

var http = require('http');

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
  // /gravatar/c@codinghouse.co
  // /math/square/5  =>  25
  // /sentence/A%20Sentence%20here
  // /birthday/12/26/1986
  console.log('request is: ' + req);

  //res.writeHead(200);
  //res.end('Hello Http');
});

function handleGravatar(req, res) {
  res.end('res Gravatar')
}

function handleSquare(req, res) {
  console.log('r=' + req.url)
  var num = req.url.slice('/Squarl/'.length)
  res.end('res Square' + num*num)
}

function handleSum(req, res) {
  var num = req.url.slice('/sum/'.length).split('/')
  var result = num.reduce(function(running, cur, index, arr) {
    return running += (cur*1)
  },0)
  res.end('res Sum' + result)
}

function handleSentence(req, res) {
  res.end('res Sentence')
}

function handleBirthday(req, res) {
  res.end('res Birthday')
}


server.listen(PORT);
console.log('Started on port: ' + PORT);

/*
// Given an email like this, respond w/a gravatar
/gravatar/c@codinghouse.co

// Convert the email into an md5 hash then call this:
// https://www.npmjs.com/package/md5
var curl ="http://www.gravatar.com/avatar/[HASH]"
// Cades looks like this:
// http://www.gravatar.com/avatar/c417050fa67e3d2e9b690636c2ce80ec

///////////////////////////
// Math api
/math/square/5  =>  25
/math/sum/3/3/3  => 9

////////////////////
//
/sentence/A%20Sentence%20here

///////////////
// Birthday info
// Use moment.js
 /birthday/12/26/1986

 /// Front end port localhost:3000
 // node port localhost:8000
*/
