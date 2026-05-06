/*
 * @lc app=leetcode.cn id=67 lang=typescript
 * @lcpr version=30403
 *
 * [67] 二进制求和
 *
 * https://leetcode.cn/problems/add-binary/description/
 *
 * algorithms
 * Easy (54.38%)
 * Likes:    1383
 * Dislikes: 0
 * Total Accepted:    526K
 * Total Submissions: 967.2K
 * Testcase Example:  '"11"\n"1"\n"1010"\n"1011"'
 *
 * 给你两个二进制字符串 a 和 b ，以二进制字符串的形式返回它们的和。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入:a = "11", b = "1"
 * 输出："100"
 * 
 * 示例 2：
 * 
 * 输入：a = "1010", b = "1011"
 * 输出："10101"
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= a.length, b.length <= 10^4
 * a 和 b 仅由字符 '0' 或 '1' 组成
 * 字符串如果不是 "0" ，就不含前导零
 * 
 * 
 */

import { log } from "console"

// @lc code=start
function addBinary(a: string, b: string): string {
    let res = "";
    let carry = 0;
    let i = a.length - 1;
    let j = b.length - 1;

    while (i >= 0 || j >= 0 || carry > 0) {
        // 获取当前位的值，如果指针越界则补 =》解决ab两字符串长度不同时的解法
        const digitA = i >= 0 ? parseInt(a[i]) : 0;
        const digitB = j >= 0 ? parseInt(b[j]) : 0;

        // 当前位的总和（包括进位）
        const sum = digitA + digitB + carry;

        // 结果字符串拼接（当前位是 sum % 2）
        res = (sum % 2) + res;

        // 计算新的进位
        carry = Math.floor(sum / 2);

        i--;
        j--;
    }

    return res;
};
// @lc code=end



/*
// @lcpr case=start
// "11"\n"1"\n
// @lcpr case=end

// @lcpr case=start
// "1010"\n"1011"\n
// @lcpr case=end

 */



console.log(addBinary("11", "1"));       // 预期: "100"
console.log(addBinary("1010", "1011")); // 预期: "10101"
console.log(addBinary("101111", "10")); // 预期: "110001"