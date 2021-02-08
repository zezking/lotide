const head = require("../head");
const assertEqual = require("../assertEqual");
console.log(head);
console.log(assertEqual);

assertEqual(head([5, 6, 7]), 6);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
