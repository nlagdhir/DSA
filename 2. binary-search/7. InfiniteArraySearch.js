// Find particular target from infinite array, so here we could not use length function.
// https://www.geeksforgeeks.org/find-position-element-sorted-array-infinite-numbers/

const FindFromInfiniteArray = (nums, target) => {
  // first check for 2 items then multiply
  let start = 0;
  let end = 1;
  
  while(target > nums[end]) {  
    const temp = end + 1; 

    end = end + (end -start + 1) * 2;
    start = temp;

  }

  return binarySearch(nums, target, start, end);
};



const binarySearch = (nums, target, start, end) => {
  while (start <= end) {
    let mid = Math.round(start + (end - start) / 2);

    if (target > nums[mid]) {
      start = mid + 1;
    } else if (target < nums[mid]) {
      end = mid - 1;
    } else {
      // ans
      return mid;
    }
  }
  return -1;
};

const nums = [
  1, 3, 4, 5, 7, 8, 10, 14, 18, 19, 23, 25, 27, 28, 29, 31, 33, 38, 45, 49, 59,
  68, 79, 80, 99, 120, 135, 156, 178,
];
const target = 28;
console.log(FindFromInfiniteArray(nums, target));
