const tail = require("../tail");
const assertArraysEqual = require("../assertArraysEqual");

assertArraysEqual(tail(["Hello", "Lighthouse", "Labs"]), [
  "Lighthouse",
  "Labs",
]);
assertArraysEqual(tail(["Hello", "Lighthouse", "Labs"]), [
  "Hello",
  "Lighthouse",
]); // => will always fail!

assertArraysEqual(tail(["Hello", "This", "Group", "is", "awesome"]), [
  "Hello",
  "Lighthouse",
]);
