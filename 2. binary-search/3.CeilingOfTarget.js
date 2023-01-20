const Ceiling = (arr, target) => {
  if (arr.length === 0) {
    return false;
  }

  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.round(start + (end - start) / 2);
    //console.log(mid);
    if (arr[mid] < target) {
      start = mid + 1;
    } else if (arr[mid] > target) {
      end = mid - 1;
    } else {
        //console.log(mid);
      return mid;
    }
  }
  //console.log(start);
  return start;
};

const arr = [2, 4, 8, 12, 25, 36, 57, 89, 100, 125, 150];
const target = 101;

// it will return ceiling of the target number
console.log(Ceiling(arr, target));
