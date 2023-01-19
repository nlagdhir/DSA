// https://leetcode.com/problems/richest-customer-wealth/

const MaxWealth = (arr) => {
    let ans = 0;

    for(let i in arr) {
        let sum = 0;
        for(let j in arr[i]) {
            sum += arr[i][j];
        }
        if(sum > ans) {
            ans = sum;
        }
    }
    return ans;
}

const arr = [[2,8,7],[7,1,3],[1,9,5]]
console.log(MaxWealth(arr))