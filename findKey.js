const findKey = (arr, callback) => {
  for (i in arr) {
    if (callback(arr[i])) {
      return i
    }
  }
}

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2)) // => "noma"

console.log(findKey({
  "A": { stars: 6 },
  "B": { stars: 7 },
  "C": { stars: 9 },
  "D": { stars: 10 },
  "E": { stars: 10 },
  "F": { stars: 10 }
}, x => x.stars === 10)) // => "noma"