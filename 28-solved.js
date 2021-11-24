// I tried to refactor it with a for loop and using slice and the index and length
function implement(haystack, needle) {
  //declare an empty variable to hold the answer
  let answer = 0;
  let length = needle.length;
  console.log(needle, haystack);
  //check if needle is empty string and set answer to 0 if yes
  if (needle.length <= 0) {
    answer = 0;
  }
  //   //check that haystack includes needle
  else if (haystack.includes(needle)) {
    //   //if for loop through haystack, increasing index each time
    for (let i = 0; i < haystack.length; i++) {
      if (haystack.slice(i, length) !== needle) {
        length++;
        console.log(haystack.slice(i, length));
        console.log(i);
      } else if (haystack.slice(i, length) === needle) {
        answer = i;
      }
    }
  }
  return answer;
}
console.log(implement("mississippi", "issip"));
