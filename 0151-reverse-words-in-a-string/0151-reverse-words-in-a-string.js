/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    // return s.trim().split(/\s+/).reverse().join(" ");
    let result = "";
    let word = "";
    let i = s.length -1;

    while(i >= 0){
        if(s[i] !== ' '){
            word = s[i] + word;
        }
        else if(word.length > 0){
            if(result.length > 0) result += ' ';
            result += word;
            word = "";
        }
        i--;
    }
    if(word.length > 0){
        if(result.length > 0) result += ' ';
        result += word;
    }
    return result;
};