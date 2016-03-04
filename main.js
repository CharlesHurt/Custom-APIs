'use strict'

const PORT = 8000

var http = require('http');

var server = http.createServer(function(req, res) {
  // /gravatar/c@codinghouse.co
  // /math/square/5  =>  25
  // /sentence/A%20Sentence%20here
  // /birthday/12/26/1986
  console.log('request is: ' + req);

  res.writeHead(200);
  res.end('Hello Http');
});
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
