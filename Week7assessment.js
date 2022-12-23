///  #1  ///

let numArr = [2, -2]
let numArr2 = [3,1,7,5,4]

let addToZero =(arr) => {
    for(let i = 0; i < numArr.length; i++)
    for(let x = i + 1; x < numArr.length; x++) {
    if(arr[i] + arr[x] === 0){
        return true
    } else {
        return false
    }
}
}
console.log(addToZero(numArr))
console.log(addToZero(numArr2))

///   Time Complexity=  O(n^2)  
///   Space Complexity= O(1)


console.log("=====================")



///  #2   ///

let strArr = ["Monday"]
let strArr1 = ["yesterday"]

const hasUniqueCharacters = (str) => {
let uniqueCharacters = new Set([])
for(let i = 0; i < strArr.length; i++) {
    uniqueCharacters.add(str[i])
    if(hasUniqueCharacters){
        return true
    } else{
        return false
    }
}
return uniqueCharacters === strArr.length
}
console.log(hasUniqueCharacters(strArr))
console.log(hasUniqueCharacters(strArr1))

///   Time Complexity = O(n^2)
///   Space Complexity= O(1)




console.log("=====================")



///   #3   ///

alphabets = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

strArr= ["The quick brown fox jumps over the lazy dog"]
strArr1=['Hello moon']

const isPangram = (str) => {
    for(let i = 0; i < str.length; i++){
    if(alphabets.every(x => str.includes[i])){
        return true
    }else{
        return false
    }
}
}
        
console.log(isPangram(strArr))
console.log(isPangram(strArr1))

///  Time Complexity = O(n)  
///  Space Complexity= O(1)


console.log("=====================")


///   #4   ///



let currentCount = 0;
let result = 0;

const longestWord = (input) => {
    let currentCount = 0;
    let result = 0;
    for(let i =0; i < input.length; i++){
        if(input[i] !== ' ') {
            currentCount++
        }else{
            result = Math.max(result, currentCount)
            currentCount = 0
        }
    }
    return result
}
console.log(longestWord('Christmas is my favorite, but too cold!'))


///   Time Complexity= O(n)
///   Space Complexity= O(1)