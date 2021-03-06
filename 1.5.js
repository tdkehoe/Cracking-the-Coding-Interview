// This is for question 1.5 in the book "Cracking the Coding Interview, 6th Edition," by Gayle Laakman McDowell.

// The book's solution is erroneous. I was the first person to report an erratum in the 6th Edition on Ms. McDowell's website!
// I've included the book's solution, my solution, and my e-mail to Ms. McDowell.

// THE QUESTION
// There are three types of edits that can be performed on strings:
// insert a character, remove a character, or replace a character.
// Given two strings, write a function to check if they are one edit (or zero edits) away.

// pale, ple -> true
// pales, pale -> true
// pale, bale -> true
// pale, bake -> false

// MY E-MAIL TO MS. MCDOWELL
/*
The solution for question 1.5, v6, appears to be incorrect.

The function oneEditInsert in the solution (page 200) checks if the first characters of the two strings match,
then checks if the next pair of characters match, and so on, returning false when two pairs of mismatched characters
are found, otherwise returning true. This works for strings that are identical except for one string having an
additional character at the end, e.g., 'pales' and 'pale'. It doesn't work for 'pale' and 'ple'.

The correct algorthm should take the longer string, remove the first character, check if the two strings are now identical,
put the removed character back in place, remove the nect character, check if the two strings are now identical,
put the removed character back in place, etc.

My solution:
*/

var oneEditReplace = function(first, second) { // if string lengths are the equal
  var foundDifference = false; // initialize variable
  for (var i = 0; i < first.length; i++) {
    if (first.charAt(i) != second.charAt(i)) { // check if each character in string 1 is identical to its counterpart in string2
      if (foundDifference) { // if second difference found
        return false + " More than one difference was found.";
      }
      foundDifference = true; // if only one different character was found
    }
  }
  return true + " Replacing one letter makes the strings identical.";
};

var oneEditRemove = function(longerString, shorterString){ // if strings are different lengths
  var longerArray = longerString.split(''); // split the longer string into an array
  for (var i = 0; i < longerArray.length; i++) {
    var removedCharacter = longerArray.splice(i, 1); // remove each character from the longer array
    if (longerArray.join('') === shorterString) { // test if the strings are now identical
      return true + " Removing the '" + removedCharacter.toString() + "' makes the strings identical.";
    }
    longerArray.splice(i, 0, removedCharacter.toString()); // put the character back into the array
  }
  return false + " The removal of each character doesn't make the strings identical.";
};

var oneEditAway = function(first, second) {
  if (first === second) { // if strings are identical
    return true + " The strings are identical.";
  } else if (first.length === second.length) { // if the string lengths are equal
    return oneEditReplace(first, second);
  } else if (first.length === second.length + 1) { // if string1 is longer than string2 by one character
    return oneEditRemove(first, second);
  } else if (first.length === second.length - 1) { // if string1 is shorter than string2 by one character
    return oneEditRemove(second, first);
  } else { // if string lengths differ by more than two characters
    return false + " String lengths differ by more than two.";
  }
};

console.log(oneEditAway('pale', 'ple'));

// Book's solution below

var oneEditReplace = function(first, second) {
  var foundDifference = false;
  for (var i = 0; i < first.length; i++) {
    if (first.charAt(i) != second.charAt(i)) {
      if (foundDifference) { // if second difference found
        return false;
      }
      foundDifference = true;
    }
  }
  return true;
};

var oneEditInsert = function(s1, s2) {
  var index1 = 0;
  var index2 = 0;
  while (index1 < s1.length && index2 < s2.length) {
    if (s1.charAt(index1) != s2.charAt(index2)) {
      if (index1 != index2) {
        return false;
      }
      index2++;
    } else {
      index1++;
      index2++;
    }
  }
  return true;
};

var oneEditAway = function(first, second) {
  if (first === second) {
    return true; // strings are identical
  } else if (first.length === second.length) {
    oneEditReplace(first, second);
  } else if (first.length === second.length + 1) {
    oneEditInsert(first, second);
  } else if (first.length === second.length - 1) {
    oneEditInsert(second, first);
  } else {
    return false;
  }
};

console.log(oneEditAway('pale', 'ple'));
