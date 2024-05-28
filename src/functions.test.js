const {
  capitalize,
  reverseString,
  Calculator,
  caesarCipher,
  analyzeArray,
} = require("./functions");
const test = require("node:test");

it("Capitalize", () => {
  expect(capitalize("word")).toBe("Word");
});

it("Capitalize word already capitalized", () => {
  expect(capitalize("Word")).toBe("Word");
});

it("reverse word", () => {
  expect(reverseString("word")).toBe("drow");
});

it("Add 2 + 2", () => {
  expect(Calculator.add(2, 2)).toBe(4);
});

it("Subtract 2 - 2", () => {
  expect(Calculator.sub(2, 2)).toBe(0);
});

it("Multiply 2 * 2", () => {
  expect(Calculator.multiply(2, 2)).toBe(4);
});

it("Divide 2/2", () => {
  expect(Calculator.div(2, 2)).toBe(1);
});

describe("Caeser Cipher", () => {
  test("Cipher 'abc' to 'def'", () => {
    expect(caesarCipher("abc", 3)).toBe("def");
  });
  test("Cipher 'xyz' to 'abc'", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });
  test("Cipher 'ABC' to 'DEF'", () => {
    expect(caesarCipher("ABC", 3)).toBe("DEF");
  });
});

describe("Analyze Array", () => {
  test("Analyze Array", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toMatchObject({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });
});
