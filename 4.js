// Given a string, write a function to check if it is a permutation of a palindrome.
// All or all but one unique characters must have an even number of instances

var palindromePermutation = function(string) {
  var counterOdd = 0; // initialize counter
  string = string.toLowerCase(); // convert string to lowercase
  for (var i = 0; i < 26; i++) {
    var alpha = String.fromCharCode('a'.charCodeAt() + i); // generate the 26 lowercase letters
    var re = new RegExp( alpha, "g" ); // create a regular expression object that searches for each letter, globally
    if (string.match(re) != null && string.match(re).length%2 != 0) { // if the string contains the letter and the count of these letters is odd
      counterOdd++; // increment the count of paired letters
      if (counterOdd > 1) {
        break; // don't check the rest of the letters
      }
    }
  }
  if (counterOdd === 0 || counterOdd === 1) { // if there is zero or one non-paired letter
    console.log("Palindromable.")
  }
  else {
    console.log("Not palindromable.")
  }
};

palindromePermutation("Doc, note: I dissent. A fast never prevents a fatness. I diet on cod");
