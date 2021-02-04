const failed = "Assertion Failed: ";
const passed = "Assertion Passed: ";
const notEqual = " !== ";
const equal = " === "

const assertEqual = function (actual, expected) {

  if (actual !== expected) {

    console.log(`${failed}${actual}${notEqual}${expected}`);

  } else {

    console.log(`${passed}${actual}${equal}${expected}`);
  }

}


const findKeyByValue = function (obj, str) {
  for (const prop in obj) {
    if (obj[prop].localeCompare(str) === 0) {
      return prop;
    }
  }
  return undefined;
}

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
  drama: "The Breaking Bad"
};

const testObj = {
  a: '1',
  b: '2',
  c: '3',
  d: '5',
  e: '6'
}

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"))
console.log(findKeyByValue(bestTVShowsByGenre, "That '70s Show"))



assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

assertEqual(findKeyByValue(testObj, 2), 'b');
assertEqual(findKeyByValue(testObj, 3), 'c');
assertEqual(findKeyByValue(testObj, 4), 'b');
assertEqual(findKeyByValue(testObj, 5), 'd');
assertEqual(findKeyByValue(testObj, 7), undefined);