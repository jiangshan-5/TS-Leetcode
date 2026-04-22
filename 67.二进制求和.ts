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
    //进位
    let up = 0
    //反转字符串，便于操作
    let a1 = a.split('').reverse().join('')
    let b1 = b.split('').reverse().join('')
    //结果字符串
    let res = ''
    //循环最小长度
    let len = Math.min(a1.length, b1.length)
    //多余字符串
    let res1 = a1.length > b1.length ? a1.slice(b1.length) : b1.slice(a1.length)

    for (let i = 0; i < len; i++) {
        if (up == 0) {
            if (a1[i] == '1' && b1[i] == '1') {
                res += '0'
                up = 1
            }
            else if (a1[i] == '1' || b1[i] == '1') {
                res += '1'
                up = 0
            }
            else {
                res += '0'
                up = 0
            }
        } else {
            if (a1[i] == '1' && b1[i] == '1') {
                res += '1'
                up = 1
            }
            else if (a1[i] == '1' || b1[i] == '1') {
                res += '0'
                up = 1
            }
            else {
                res += '1'
                up = 0
            }
        }
    }
    //处理剩余字符串
    //剩余字符串和之前的字符串进行拼接，取最后一位进行计算
    //剩余字符串单独进行计算
    let res2 = ''
    //计算进位加和
    if ( up == 0  && res.charAt(res.length - 1) == '0') {
        res = res.slice(0, res.length - 1) + res1
    } else if (up == 1) {
        for (let i = 0; i < res1.length; i++) {
            if (res1[i] == '1') {
                res2 += '0'
                up = 1
            }
            else {
                res2 += '1'
                up = 0
            }
        }
    }

    //处理末位进位
    if (up == 1) {
        res += '1'
    }
    console.log(res);
    return res.split('').reverse().join('')
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



addBinary("101111", "10")