const assert = require("chai").assert;
const countOnly = require("../countOnly");
describe("#countOnly", () => {
  it("should return 1 if input is Jason", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe",
    ];

    const actual = countOnly(firstNames, {
      Jason: true,
      Karima: true,
      Fang: true,
      Agouhanna: false,
    });

    const expected = 1;
    assert.strictEqual(actual["Jason"], expected);
  });
});
describe("#countOnly", () => {
  it("should return 2 if input is Fang", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe",
    ];

    const actual = countOnly(firstNames, {
      Jason: true,
      Karima: true,
      Fang: true,
      Agouhanna: false,
    });

    const expected = 2;
    assert.strictEqual(actual["Fang"], expected);
  });
});
describe("#countOnly", () => {
  it("should return 2 if input is Fang", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe",
    ];

    const actual = countOnly(firstNames, {
      Jason: true,
      Karima: true,
      Fang: true,
      Agouhanna: false,
    });

    const expected = undefined;
    assert.strictEqual(actual["Karima"], expected);
  });
});
describe("#countOnly", () => {
  it("should return 2 if input is Fang", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe",
    ];

    const actual = countOnly(firstNames, {
      Jason: true,
      Karima: true,
      Fang: true,
      Agouhanna: false,
    });

    const expected = undefined;
    assert.strictEqual(actual["Agouhanna"], expected);
  });
});
