const minimum = (nums) => {

    // return false if array length is 0
    if(nums.length === 0) {
        return false;
    }

    let ans = nums[0];

    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        if(ans > nums[index]){
            ans = nums[index];
        }
    }
    return ans;
}


const nums = [5,4,16, 2,1,-1, 27];

// return minimum number from the array
console.log(minimum(nums));