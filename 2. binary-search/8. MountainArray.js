// https://leetcode.com/problems/peak-index-in-a-mountain-array/
// https://leetcode.com/problems/find-peak-element/

const PeakIndex = (arr) => {

    let start = 0;
    let end = arr.length - 1;

    while(start < end) {

        let mid = Math.floor(start + (end - start) / 2);

        if(arr[mid] > arr[mid + 1]) {
            // deacreasing side
            end = mid;
        }else if(arr[mid] < arr[mid + 1]) {
            // increasing side
            start = mid + 1;
        }

        
    }
    return start;
}

const arr = [3,5,3,2,0]; 
console.log(PeakIndex(arr));