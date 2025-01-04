const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const num = n.toString();
  let max = 0;
  let any;
  for (let i = 0; i < num.length; i++) {
    any = num.replace(num[i], "");
    if (+any > max) max = any;
  }
  return +max;
}

module.exports = {
  deleteDigit,
};
