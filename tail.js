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

const tail = function (s) {
  if (s.length === 0 || s.length === 1) {
    s = [];
  } else {
    s = s.slice(1)
  }
  return s;
}

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"
