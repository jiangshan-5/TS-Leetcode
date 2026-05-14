//方法1
// function isPalindrome(x: number): boolean {
//     if (!isMinus(x)) {
//         let str1 = String(x)
//         if (str1 === str1.split("").reverse().join("")) {
//             return true
//         }
//     }
//     return false
// };
//方法2
function isPalindrome(x: number): boolean {
    if (x < 0) return false
    if (x < 10) return true
    let reverseNum = 0
    let originalNum = x
    while (x > 0) {
        reverseNum = reverseNum * 10 + x % 10
        x = Math.floor(x / 10)
    }
    return reverseNum == originalNum
};

console.log(isPalindrome(12321));
