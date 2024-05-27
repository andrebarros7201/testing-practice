const {
  capitalize,
  reverseString,
  Calculator,
  caesarCipher,
} = require("./functions");

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
  test("Cipher 'xyz' to 'abc'", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });
});
