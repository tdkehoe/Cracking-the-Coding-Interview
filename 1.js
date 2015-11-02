var counter = 0;
var unique = function(string) {
  array = string.split('');   //split string into array of characters
  for (var i = 0; i < array.length; i++) { //forEach element of the array, test if each element of the array is equal
    array.forEach(function(element) {   //iterate through the array usingh forEach
      if (array[i] === element) counter++;
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
