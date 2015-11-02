// aaron@hellometa.com
// 720-402-4069
// emilie@galvanize.com

var permutation = function(string1, string2) {
  if (string1.split('').sort().join('') === string2.split('').sort().join('')) {
    console.log("Permutation!");
  }
  else {
    console.log("Not a permutation.")
  }
};

permutation('abc', 'bca');
