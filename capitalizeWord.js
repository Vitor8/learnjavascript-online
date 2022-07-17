/**
 * @param {string} word
 */
 function capitalize(word) {
  const first = word[0].toLocaleUpperCase();
  const left = word.substring(1).toLocaleLowerCase();
  return `${first}${left}`
}

// Sample usage - do not modify
console.log(capitalize("sam")); // "Sam"
console.log(capitalize("ALEX")); // "Alex"
console.log(capitalize("chARLie")); // "Charlie"