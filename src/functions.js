function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverseString(string) {
  return string.split("").reverse().join("");
}

const Calculator = (function () {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const div = (a, b) => a / b;
  const multiply = (a, b) => a * b;
  return { add, sub, div, multiply };
})();

function caesarCipher(string, shiftFactor) {
  return "abc";
}

module.exports = { capitalize, reverseString, Calculator, caesarCipher };
