function vowel(str){
    str = str.toLowerCase();
    let count = 0;
    for(const char of str){
        if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' || char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U'){
            count++;
        }
    }
    return count;
}
console.log(vowel("Hello World")); // 3

// 2nd method
const countvow = (str) => {
    str = str.toLowerCase();
    let count = 0;
    for(const char of str){
        if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' || char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U'){
            count++;
        }
    }
    return count;
}

console.log(countvow("AAAa"));
