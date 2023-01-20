// https://leetcode.com/problems/find-smallest-letter-greater-than-target/

const SmallestLetter = () => {

    let start = 0;
    let end = letters.length - 1;

    while(start <= end) {
        let mid = Math.round(start + (end - start) / 2);

        if(letters[mid] > target) {
            end = mid - 1;
        }else{
            start = mid + 1;
        }
    }
    return letters[start % letters.length]

}

const letters = ["c","f","j"];
target = "a";
console.log(SmallestLetter(letters, target));