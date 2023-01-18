const search = (arr, target) => {
  if (arr.length === 0) {
    return false;
  }

  for (let i in arr) {
    for (let j in arr[i]) {
      if (arr[i][j] === target) {
        return new Array(i,j);
      }
    }
  }

  return false;
};


const max = (arr) => {

    let ans = arr[0][0];
    for(let i in arr) {
        for(let j in arr[i]){
            if(arr[i][j] > ans){
                ans = arr[i][j];
            }
        }
    }
    return ans;
}

const arr = [
  [1, 45, 80],
  [41, 1205, 42],
  [78, 90, 101],
];
const target = 80;
console.log(search(arr, target));
console.log(max(arr));
