
// this function will accept numbers array and target number
// Return true if the number is exists in the array else it will return false
const linearSearch = (nums, target) => {
    if(nums.length == 0){
        return false;
    }

    // return true if the number is exists in the array
   
    for (let index = 0; index < nums.length; index++) {
        if(nums[index] === target) { 
            return true;
        }
    }

    // return false if the number is not present in the array
    return false;

}

// this function will accept numbers array and target number
// Return Index of the number if its exists else it will return -1 
const linearSearch2 = (nums, target) => {
    if(nums.length == 0){
        return -1;
    }

    // return true if the number is exists in the array
   
    for (let index = 0; index < nums.length; index++) {
        if(nums[index] === target) { 
            return index;
        }
    }

    // return false if the number is not present in the array
    return -1;

}

// this function will accept numbers array and target number
// Return number if its exists else it will return -1 
const linearSearch3 = (nums, target) => {
    if(nums.length == 0){
        return -1;
    }

    // return true if the number is exists in the array
   
    // for (let index = 0; index < nums.length; index++) {
    //     if(nums[index] === target) { 
    //         return nums[index];
    //     }
    // }

    //Enhanced for loop
    for(let index in nums){
        if(nums[index] === target){
            return nums[index];
        }
    }

    // return false if the number is not present in the array
    return -1;

}

const nums = [5,7,10,2,15,80,60];
const target = 7; 

// return true if the number is exists in the array
console.log(linearSearch(nums, target));

// return the index of the number in the array if it exists
console.log(linearSearch2(nums, target));

// return the target number if it exists in the array
console.log(linearSearch3(nums, target)); 