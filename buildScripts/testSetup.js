//This file isn't transpiled, so it must be CommonJS and ES5

//Register babel to tranpile before our test run.
require('babel-register')();

//Disable weback features that Mocha doesn't understand.
require.extensions['.css'] = function() {};
