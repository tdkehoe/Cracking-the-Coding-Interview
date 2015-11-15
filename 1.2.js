// Given two strings, write a method to decide if one is a permutation of the other

var permutation = function(string1, string2) {
  if (string1.split('').sort().join('') === string2.split('').sort().join('')) {
    console.log("Permutation!");
  }
  else {
    console.log("Not a permutation.")
  }
};

permutation('abc', 'bca');

// aaron@hellometa.com
// 720-402-4069
// emilie@galvanize.com
