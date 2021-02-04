const map = (arr, callback) => {
  const result = [];
  arr.forEach(element => {
    result.push(callback(element))
  });
  return result;
}

const words = ["ground", "control", "to", "major", "tom"];

console.log(map(words, word => word.length > 4));