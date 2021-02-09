const findKeyByValue = function (obj, str) {
  for (const prop in obj) {
    if (obj[prop].localeCompare(str) === 0) {
      return prop;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;
