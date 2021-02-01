const emoji = require('node-emoji');
const { log } = console;
const pizza = emoji.get('pizza')
const tomato = emoji.get("tomato")
const assertEqual = function (actual, expected) {

  if (actual !== expected) {
    if (typeof actual === 'string') {
      console.log(pizza + pizza + pizza + "Assertion Failed: " + '"' + actual + '"' + " !== " + '"' + expected + '"');
    } else if (typeof actual === 'number') {
      console.log(pizza + pizza + pizaa + "Assertion Failed: " + '"' + actual + '"' + " !== " + '"' + expected + '"');
    }
  } else {
    if (typeof actual === 'string') {
      console.log(tomato + tomato + tomato + "Assertion Passed: " + actual + " === " + expected);
    } else if (typeof actual === 'number') {
      console.log(tomato + tomato + tomato + "Assertion Passed: " + actual + " === " + expected);
    }
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1); 