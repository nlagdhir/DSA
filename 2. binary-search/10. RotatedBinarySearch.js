// https://leetcode.com/problems/search-in-rotated-sorted-array/description/

const RotatedBinarySearch = (nums, target) => {
  const peak = peakElement(nums);

  if (peak === -1) {
    // peak === -1 means array is not Roated
    // So do simple binary search
    return binarySearch(nums, target, 0, nums.length - 1);
  }

  // if peak found then we have 2 asc array
  // first check if pivot is target?
  if (nums[peak] === target) {
    return peak;
  }

  if (target >= nums[0]) {
    return binarySearch(nums, target, 0, peak - 1);
  }

  return binarySearch(nums, target, peak + 1, nums.length - 1);
};

const binarySearch = (nums, target, start, end) => {
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (target > nums[mid]) {
      start = mid + 1;
    } else if (target < nums[mid]) {
      end = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
};

const peakElement = (nums) => {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    // Case 1 :
    if (nums[mid] > nums[mid + 1]) {
      return mid;
    }

    // case 2 :
    if (nums[mid] < nums[mid - 1]) {
      return mid - 1;
    }

    // Case 3 :
    if (nums[mid] >= nums[start]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
};

const nums = [4, 5, 6, 7, 0, 1, 2];
const target = 3;
console.log(RotatedBinarySearch(nums, target));
