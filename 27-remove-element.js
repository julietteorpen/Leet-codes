// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place.
// The relative order of the elements may be changed.
// Since it is impossible to change the length of the array in some languages,
// you must instead have the result be placed in the first part of the array nums.
// More formally, if there are k elements after removing the duplicates,
// then the first k elements of nums should hold the final result.
// It does not matter what you leave beyond the first k elements.
// Return k after placing the final result in the first k slots of nums.

function remove(nums, val) {
  //create a variable with the value 0
  let pointer = 0;
  //loop through nums to find duplicates that match val
  for (i = 0; i < nums.length; i++) {
    // if the element does NOT match val, then assign it to the index of pointer and increment the value of pointer
    if (nums[i] !== val) {
      nums[pointer] = nums[i];
      pointer++;
      console.log(nums[i], pointer);
    }
  }
  console.log(nums);
  return pointer;
}

console.log(remove([0, 1, 2, 2, 3, 0, 4, 2], 2));
