// Implement an algorithm to determine if a string has all unique characters.

var counter = 0;
var unique = function(string) {
  array = string.split('');   //split string into array of characters
  for (var i = 0; i < array.length; i++) {
    array.forEach(function(element) {   //iterate through the array of characters using forEach
      if (array[i] === element) counter++; // if the element is found in the array increment the counter
    });
  };
  if (counter === array.length) { //if counter is greater than array.length then the array has non-unique elements
      console.log("Unique!");
    }
    else {
      console.log("One or more characters isn't unique.");
    }
};

unique('mystring');
