/*
 * @lc app=leetcode.cn id=415 lang=typescript
 * @lcpr version=30403
 *
 * [415] 字符串相加
 *
 * https://leetcode.cn/problems/add-strings/description/
 *
 * algorithms
 * Easy (55.11%)
 * Likes:    916
 * Dislikes: 0
 * Total Accepted:    415.2K
 * Total Submissions: 753.2K
 * Testcase Example:  '"11"\n"123"\n"456"\n"77"\n"0"\n"0"'
 *
 * 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和并同样以字符串形式返回。
 * 
 * 你不能使用任何內建的用于处理大整数的库（比如 BigInteger）， 也不能直接将输入的字符串转换为整数形式。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：num1 = "11", num2 = "123"
 * 输出："134"
 * 
 * 
 * 示例 2：
 * 
 * 输入：num1 = "456", num2 = "77"
 * 输出："533"
 * 
 * 
 * 示例 3：
 * 
 * 输入：num1 = "0", num2 = "0"
 * 输出："0"
 * 
 * 
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= num1.length, num2.length <= 10^4
 * num1 和num2 都只包含数字 0-9
 * num1 和num2 都不包含任何前导零
 * 
 * 
 */

// @lc code=start
function addStrings(num1: string, num2: string): string {
    let res = ""
    let i = num1.length - 1, j = num2.length - 1, carry = 0
    while (i >= 0 || j >= 0 || carry > 0) {
        //解决指针越位补0
        let x = i >= 0 ? parseInt(num1[i]) : 0
        let y = j >= 0 ? parseInt(num2[j]) : 0

        //计算当前位
        let sum = (x + y + carry) % 10

        //计算进位
        carry = Math.floor((x + y + carry) / 10)

        //字符串头插法
        res = sum + res

        //指针后移
        i--
        j--

    }
    return res
};
// @lc code=end



/*
// @lcpr case=start
// "11"\n"123"\n
// @lcpr case=end

// @lcpr case=start
// "456"\n"77"\n
// @lcpr case=end

// @lcpr case=start
// "0"\n"0"\n
// @lcpr case=end

 */

