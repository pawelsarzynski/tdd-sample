import assert from "assert";
import { concat } from "./concat.js";

describe("concat", function () {
  it("should shallow clone `array`", function () {
    const array = [1, 2, 3],
      actual = concat(array);

    assert.deepStrictEqual(actual, array);
    assert.notStrictEqual(actual, array);
  });

  it("should concat arrays and values", function () {
    const array = [1],
      actual = concat(array, 2, [3], [[4]]);

    assert.deepStrictEqual(actual, [1, 2, 3, [4]]);
    assert.deepStrictEqual(array, [1]);
  });

  it("should cast non-array `array` values to arrays", function () {
    const values = [, null, undefined, false, true, 1, NaN, "a"];

    let expected = values.map(function (value, index) {
      return index ? [value] : [];
    });

    let actual = values.map(function (value, index) {
      return index ? concat(value) : concat();
    });

    assert.deepStrictEqual(actual, expected);

    expected = values.map(function (value) {
      return [value, 2, [3]];
    });

    actual = values.map(function (value) {
      return concat(value, [2], [[3]]);
    });

    assert.deepStrictEqual(actual, expected);
  });
});
