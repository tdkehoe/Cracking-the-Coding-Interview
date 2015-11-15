// There are three types of edits that can be performed on strings:
// insert a character, remove a character, or replace a character.
// Given two strings, write a function to check if they are one edit (or zero edits) away.

// Test if the strings are the same.
//
// Test if the string lengths are the same or different by one.
//
// If string lengths are different by one.
// Test if removing a character makes the strings the same.
// Split string1 into an array.
// Remove each character, join, and test if it's the same as string2.
//
// Test if inserting a character makes the strings the same.
// Split string2 into an array.
// Remove each character, join, and test if it's the same as string1.
//
// If string lengths are the same.
// Test if replacing a character makes the strings the same.
// Split string1 into an array.
// For each character, replace it with 26 characters, testing each if it's the same as string2.

// Or split string1 and string2 into arrays.
// Replace string1.character1 with string2.character1. Are the strings the same?
// Continue for all characters.


/*
The solution for question 1.5, v6, appears to be incorrect.

The function oneEditInsert in the solution (page 200) checks if the first characters of the two strings match, then checks if the next pair of characters match, and so on, returning false when two pairs of mismatched characters are found, otherwise returning true. This works for strings that are identical except for one string having an additional character at the end, e.g., 'pales' and 'pale'. It doesn't work for 'pale' and 'ple'.

The correct algorthm should take the longer string, remove the first character, check if the two strings are now identical, put the removed character back in place, remove the nect character, check if the two strings are now identical, put the removed character back in place, etc.

My solution:

*/

var oneEditReplace = function(first, second) {
  console.log("In oneEditReplace.");
  var foundDifference = false;
  for (var i = 0; i < first.length; i++) {
    if (first.charAt(i) != second.charAt(i)) {
      if (foundDifference) { // if second difference found
        return false + " More than one difference was found.";
      }
      foundDifference = true;
    }
  }
  return true + " Replacing one letter makes the strings identical.";
};

var oneEditRemove = function(longerString, shorterString){
  console.log("In oneEditRemove");
  var longerArray = longerString.split('');
  console.log(longerArray.length);
  for (var i = 0; i < longerArray.length; i++) {
    console.log(i);
    var removedCharacter = longerArray.splice(i,1);
    console.log(removedCharacter);
    console.log(longerArray);
    console.log(longerArray.join(''));
    if (longerArray.join('') === shorterString) {
      return true + " Removing the '" + removedCharacter.toString() + "' makes the strings identical.";
    }
    longerArray.splice(i, 0, removedCharacter.toString());
    console.log(longerArray);
  };
  return false + " The removal of each character doesn't make the strings identical."
};

var oneEditAway = function(first, second) {
  if (first === second) {
    return true + " The strings are identical.";
  } else if (first.length === second.length) {
    return oneEditReplace(first, second);
  } else if (first.length === second.length +1) {
    return oneEditRemove(first, second);
  } else if (first.length === second.length -1) {
    return oneEditRemove(second, first);
  } else {
    return false + " String lengths differ by more than two.";
  }
};

console.log(oneEditAway('pale', 'ple'));






// Book's solution below

var oneEditReplace = function(first, second) {
  console.log("In oneEditReplace.");
  var foundDifference = false;
  for (var i = 0; i < first.length; i++) {
    if (first.charAt(i) != second.charAt(i)) {
      if (foundDifference) { // if second difference found
        console.log("false");
        return false;
      }
      foundDifference = true;
    }
  }
  console.log("true");
  return true;
};

var oneEditInsert = function(s1, s2) {
  console.log("In oneEditInsert.");
  console.log(s1);
  console.log(s2);
  index1 = 0;
  index2 = 0;
  while (index1 < s1.length && index2 < s2.length) {
    if (s1.charAt(index1) != s2.charAt(index2)) {
      console.log("Characters don't match.");
      if (index1 != index2) {
        console.log("A second character doesn't match.");
        console.log("false");
        return false;
      }
      index2++;
      console.log(index1);
      console.log(index2);
    } else {
      console.log("Characters match.");
      index1++;
      console.log(index1);
      index2++;
      console.log(index2);
    }
  }
  console.log("true");
  return true;
};

var oneEditAway = function(first, second) {
  if (first === second) {
    return true; // strings are identical
  } else if (first.length === second.length) {
    oneEditReplace(first, second);
  } else if (first.length === second.length +1) {
    oneEditInsert(first, second);
  } else if (first.length === second.length -1) {
    oneEditInsert(second, first);
  } else {
    console.log("False.");
  }
};

console.log(oneEditAway('pale', 'ple'));
