// https://leetcode.com/problems/find-in-mountain-array/

// const search = (arr, target) => {
//   const peak = peakIndex(arr);

//   const leftCheck = OrderAgnosticBS(arr, target, 0, peak);
//   if (leftCheck == -1) {
//     const rightCheck = OrderAgnosticBS(arr, target, peak + 1, arr.length - 1);
//     return rightCheck;
//   }
//   return leftCheck;
// };

var findInMountainArray = function(target, mountainArr) { 
    const peak = peakIndex(mountainArr);

  const leftCheck = OrderAgnosticBS(mountainArr, target, 0, peak);
  if (leftCheck == -1) {
    const rightCheck = OrderAgnosticBS(mountainArr, target, peak + 1, mountainArr.length - 1);
    return rightCheck;
  }
  return leftCheck;
};

const OrderAgnosticBS = function (arr, target, start, end) {
  const isAsc = arr[0] < arr[end];

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (target === arr[mid]) {
      return mid;
    }

    if (isAsc) {
      if (target > arr[mid]) {
        start = mid + 1;
      } else if (target < arr[mid]) {
        end = mid - 1;
      }
    } else {
      if (target > arr[mid]) {
        end = mid - 1;
      } else if (target < arr[mid]) {
        start = mid + 1;
      }
    }
  }
  return -1;
};

const peakIndex = (arr) => {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (arr[mid] > arr[mid + 1]) {
      end = mid;
    } else if (arr[mid] < arr[mid + 1]) {
      start = mid + 1;
    }
  }

  return start;
};

const arr = [1, 2, 3, 5, 4, 3, 1];
const target = 4;
console.log(findInMountainArray(target,arr));
