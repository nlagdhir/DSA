
const SearchInString = (str, char) => {
    
    // if string has 0 length then it will return false
    if(str.length === 0) {
        return false;
    }

    // for (let index = 0; index < str.length; index++) {
    //     if(char === str.charAt(index)) {
    //         return true;
    //     }  
    // }

    for(let index in str) {
        if(char === str.charAt(index)) {
            return true;
        }
    }

    return false;


}


const SearchInString2 = (str, char) => {
    
    // if string has 0 length then it will return false
    if(str.length === 0) {
        return false;
    }
    
    const strArray = str.split('');
    //console.log(strArray);

    for(let index in strArray) {
        if(char === strArray[index]) {
            return true; 
        }
    }

     return false;


}

const str = 'nilesh';
const char = 'l';
console.log(SearchInString(str, char));
console.log(SearchInString2(str, char));
