const SearchInGivenRange = (nums, target, start, end) => {
    if(nums.length === 0){
        return false;
    }

    for(let index = start; index < end; index++){
        if(nums[index] === target){
            return true;
        }
    }

    return false;

}


const nums =  [12,45,80,85,445,4512,-25,45];
const target = 45;
console.log(SearchInGivenRange(nums, target, 2, 4)) 