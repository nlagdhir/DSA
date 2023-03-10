const binarySearch = (arr, target) => {
    let start = 0;
    let end = arr.length - 1;

    while(start <= end) {
        let mid = Math.round(start + (end - start) / 2);

        if(target > arr[mid]) {
            start = mid + 1;
        } else if(target < arr[mid]) {
            end = mid - 1;
        }else {
            return mid;
        }
    }
    return -1;
}



const arr = [-18, -12, -4, 0, 2, 3, 4, 15, 16, 18, 22, 45, 89];
const target = 3;
console.log(binarySearch(arr, target))