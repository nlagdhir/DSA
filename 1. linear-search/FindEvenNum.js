// Question from leetcode 
//https://leetcode.com/problems/find-numbers-with-even-number-of-digits/


const findEvenNumber = (nums) => {

    if(nums.length === 0) { 
        return false;
    }
    let ans = 0;

    for (let index = 0; index < nums.length; index++) {
        let string = nums[index].toString();
        if(string.length % 2 === 0){
            ans +=1;
        }   
    }

    return ans;
}

const findEvenNumber2 = (nums) => {

    if(nums.length === 0) { 
        return false;
    }
    let ans = 0;

    for (let index in nums) {
        if(even(nums[index])){
            ans +=1;
        }
    }

    return ans;
}

const even = (num) => {

    let count = 0;
    while(num > 0){
        num = Math.floor(num / 10);
        count++;
    }
    
    return count % 2 === 0;
}

const nums = [555,901,482,1771]

// return count of even numbers in the given array
console.log(findEvenNumber(nums));
console.log(findEvenNumber2(nums));