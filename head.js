const emoji = require('node-emoji');
const { log } = console;
const pizza = emoji.get('pizza')
const tomato = emoji.get("tomato")

const failed = "Assertion Failed: ";
const passed = "Assertion Passed: ";
const quote = '"';
const notEqual = " !== ";
const equal = " === "
const assertEqual = function (actual, expected) {

  if (actual !== expected) {
    if (typeof actual === 'string') {
      console.log(`${pizza}${pizza}${pizza}${failed}${quote}${actual}${quote}${notEqual}${quote}${expected}${quote}`)
    } else if (typeof actual === 'number') {
      console.log(`${pizza}${pizza}${pizza}${failed}${actual}${notEqual}${expected}`);
    }
  } else {
    if (typeof actual === 'string') {
      console.log(`${tomato}${tomato}${tomato}${passed}${quote}${actual}${quote}${equal}${quote}${expected}${quote}`);
    } else if (typeof actual === 'number') {
      console.log(`${tomato}${tomato}${tomato}${passed}${actual}${equal}${expected}`);
    }
  }
};

const head = function (array) {
  if (array.length === 0) {
    return undefined;
  } else {
    return array[0];
  }
}


assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");



