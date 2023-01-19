const binarySearch = (arr, target) => {
  let start = 0;
  let end = arr.length-1;
  
  const isAsc =  arr[start] < arr[end];

  while(start <= end) {

    let mid = Math.round(start + (end - start) / 2);

    if(target === arr[mid]) {
        return mid;
    }

    if(isAsc){
        if(target > arr[mid]){
            start = mid + 1;
        }else{
            end = mid - 1
        }
    }else{
        if(target > arr[mid]){
            end = mid - 1;
        }else{
            start = mid + 1;
        }
    }

  }
  return -1;

};

const arr = [-18, -12, -4, 0, 2, 3, 4, 15, 16, 18, 22, 45, 89];
//const arr = [89, 45, 22, 18, 16, 15, 4, 3, 2, 0, -4, -12, -18];
const target = -4;
console.log(binarySearch(arr, target));
