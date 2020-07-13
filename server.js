'use strict';

// npm init to create package.json first




// this will bring in my express libraray
// like putting it in a script tag on front end have to gogo back to command line and enter:
// npm install -S express
// to install
const express = require('express');

// bring in the dotenv library
// the job of this library is to find the .env file and get the variables out of it so we can use them in our JS file
// don't need to save in a variable because wont be using anything from it later
// install in command line w/:
// npm install -S dotenv
require('dotenv').config();

// this gives us a variable that we can use to run all the methods that are in the express library
const app = express();

// this lets us serve a website from a directory
app.use(express.static('./public'));

// the dotenv library lets us grab the PORT var from the .env using the magic words process.env.variableName
// add || 3001 to end for error checking iff listening on 3001 you know that something was wrong with your ,env
const PORT = process.env.PORT || 3001;

app.get('/', function (request, response) {
  response.send('Hello World');
});

// app.get('/bananas', (request, response) => {
//   response.send('I am bananas about bananas');
// });

// turn on the server app.listen(3000)
// to turn on go to command line and enter:
// nodemon
// to turn server on

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
