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

const countOnly = function (allItems, itemsToCount) {

  const results = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item]++;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
}


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];



const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);