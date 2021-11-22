// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

function implement(haystack, needle) {
  //declare a variable to hold the answer and act as the index of haystack, assign value of 0
  let index = 0;
  //declare a second index variable, assign value of 0
  let altIndex = 0;
  //declare an empty variable to hold the answer
  let answer = 0;
  //check if needle is empty string and set answer to 0 if yes
  if (needle.length <= 0) {
    answer = 0;
    //check that haystack includes needle
  } else if (haystack.includes(needle)) {
    //if it does - loop through
    do {
      index++;
    } while (needle[altIndex] !== haystack[index]);
    {
      match.push(haystack[index]);
    }
  }
  return match.flat();
}

console.log(implement("mississippi", "issip"));
