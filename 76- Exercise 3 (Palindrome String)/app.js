// palindrome String
// level, radar

/**
 * string
 * reverse string
 *      string => array
 *      reverse array
 *      array => string
 * if string === reverse
 *      palindrome
 */


function isPalindrome(string) {
    let reversedString = string.split('').reverse().join('')
    return string === reversedString
}

console.log(isPalindrome('level'))
console.log(isPalindrome('lever'))
