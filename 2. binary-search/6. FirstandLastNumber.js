//https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

const FirstAndLastNumber = (nums, target) => {

    const first =nums.findIndex(element => element === target);
    const last = nums.lastIndexOf(target); 
    

    return [first, last]; 

  if (nums.length === 0) return false;

  let ans = [-1, -1];

  let start = search(nums, target, isFirstNumber=true);
  let end = search(nums, target, isLastNumber=false);

  ans[0] = start;
  ans[1] = end;
  console.log(start, end);
  return ans;

};

const search = (nums, target, isFirstNumber) => {
    let ans = -1;
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        let mid = Math.round(start + (end - start) / 2); 

        if(target > nums[mid]) {
            start = mid + 1;
        }else if(target < nums[mid]) { 
            end = mid - 1;
        }else {
            ans = mid;
            if(isFirstNumber) {
                end = mid - 1;
            }else {
                start = mid + 1;
            }
        }
    }
    return ans; 
}

const nums = [5, 7, 7,8, 8, 8, 10];
const target = 7;

console.log(FirstAndLastNumber(nums, target));
