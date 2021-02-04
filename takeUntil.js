const takeUntil = (arr, callback) => {
  let result = [];
  for (i of arr) {
    if (callback(i)) {
      break;
    }
    result.push(i)
  }
  return result;
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

console.log('---');

const data3 = ["I", "don't", "understand", "this", "arrow", "function", "shit"];
const results3 = takeUntil(data3, x => x === 'this');
console.log(results3);