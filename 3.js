// Write a method to replace all spaces in a string with '%20'.

var percent20 = function(string) {
  newString = string.trim().replace(/ /g,'%20');
  console.log(newString);
};

percent20("Mr John Smith   ");
