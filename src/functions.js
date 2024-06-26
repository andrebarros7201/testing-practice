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
  let output = "";

  for (let i = 0; i < string.length; i++) {
    let ascii = string[i].charCodeAt();
    if ((ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122)) {
      ascii += shiftFactor;
      if ((ascii > 90 && string[i] <= "Z") || ascii > 122) {
        ascii -= 26;
      }
    }
    output += String.fromCharCode(ascii);
  }
  return output;
}

function analyzeArray(array) {
  return {
    average: array.reduce((a, b) => a + b, 0) / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
}

module.exports = {
  capitalize,
  reverseString,
  Calculator,
  caesarCipher,
  analyzeArray,
};
