const middle = function (arr) {
  const arrLength = arr.length;
  const midIndex = arr.length / 2;
  if (!Array.isArray(arr)) {
    return "Please enter an array";
  } else if (arrLength < 3) {
    return [];
  } else if (!Number.isInteger(midIndex)) {
    return arr.slice(Math.trunc(midIndex), Math.trunc(midIndex) + 1);
  } else {
    return arr.slice(midIndex - 1, midIndex), arr.slice(midIndex, midIndex + 1);
  }
};

module.exports = middle;
