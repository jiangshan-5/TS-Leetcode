// 字符串常用方法笔记与练习

// ==================== 知识点：slice() vs substring() ====================
/**
 * 两者都用于提取字符串的一部分，并返回一个 *新字符串*（原字符串不会被修改）。
 * 
 * 区别：
 * 1. 负数处理：
 *    - slice()：会将负数视为从字符串末尾开始计算。
 *    - substring()：会将负数视为 0。
 * 
 * 2. 参数大小顺序：
 *    - slice()：如果 start > end，返回空字符串 ""。
 *    - substring()：如果 start > end，会自动交换两个参数。
 */

const exampleStr = "LeetCode";

// 练习 1：提取 "Code"
console.log('练习1 (slice):', exampleStr.slice(4));
console.log('练习1 (substring):', exampleStr.substring(4));

// 练习 2：负数处理
console.log('练习2 (slice -4):', exampleStr.slice(-4));      // "Code"
console.log('练习2 (substring -4):', exampleStr.substring(-4)); // "LeetCode" (视为 0)

// ==================== 知识点：字符串不可变性 (Immutability) ====================
/**
 * JavaScript 中的字符串是不可变的。任何方法都不会改变原串。
 */
let word = "hello";
word.toUpperCase(); 
console.log('不可变性验证:', word); // 依然是 "hello"

// 正确做法：接收返回值
word = word.toUpperCase();
console.log('正确做法:', word); // "HELLO"

// ==================== 知识点：trim() 与常用组合 ====================
/**
 * trim() 用于去除字符串两端的空格。
 * 在处理 LeetCode 题目（如 58. 最后一个单词的长度）时非常有用。
 */
const messyStr = "   hello world   ";
console.log('trim():', messyStr.trim()); // "hello world"

// 练习 3：反转单词（LeetCode 常见思路）
function reverseString(s: string): string {
    return s.trim().split('').reverse().join('');
}
console.log('练习3:', reverseString("  algorithm  ")); // "mhtirogla"

// ==================== 答案参考 ====================
/*
练习1：both are "Code"
练习2：slice 是 "Code", substring 是 "LeetCode"
*/
