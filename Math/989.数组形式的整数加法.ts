/*
 * @lc app=leetcode.cn id=989 lang=typescript
 * @lcpr version=30403
 *
 * [989] 数组形式的整数加法
 *
 * https://leetcode.cn/problems/add-to-array-form-of-integer/description/
 *
 * algorithms
 * Easy (45.00%)
 * Likes:    270
 * Dislikes: 0
 * Total Accepted:    83.8K
 * Total Submissions: 186.3K
 * Testcase Example:  '[1,2,0,0]\n34\n[2,7,4]\n181\n[2,1,5]\n806'
 *
 * 整数的 数组形式  num 是按照从左到右的顺序表示其数字的数组。
 * 
 * 
 * 例如，对于 num = 1321 ，数组形式是 [1,3,2,1] 。
 * 
 * 
 * 给定 num ，整数的 数组形式 ，和整数 k ，返回 整数 num + k 的 数组形式 。
 * 
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：num = [1,2,0,0], k = 34
 * 输出：[1,2,3,4]
 * 解释：1200 + 34 = 1234
 * 
 * 
 * 示例 2：
 * 
 * 输入：num = [2,7,4], k = 181
 * 输出：[4,5,5]
 * 解释：274 + 181 = 455
 * 
 * 
 * 示例 3：
 * 
 * 输入：num = [2,1,5], k = 806
 * 输出：[1,0,2,1]
 * 解释：215 + 806 = 1021
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= num.length <= 10^4
 * 0 <= num[i] <= 9
 * num 不包含任何前导零，除了零本身
 * 1 <= k <= 10^4
 * 
 * 
 */

// @lc code=start
function addToArrayForm(num: number[], k: number): number[] {
    let res = []

    let i = num.length - 1, j = k.toString().length - 1, carry = 0
    while (i >= 0 || j >= 0 || carry > 0) {
        let x = i >= 0 ? num[i] : 0
        let y = j >= 0 ? parseInt(k.toString()[j]) : 0

        let sum = (x + y + carry) % 10

        carry = Math.floor((x + y + carry) / 10)

        res.unshift(sum)

        i--
        j--

    }
    return res
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,0,0]\n34\n
// @lcpr case=end

// @lcpr case=start
// [2,7,4]\n181\n
// @lcpr case=end

// @lcpr case=start
// [2,1,5]\n806\n
// @lcpr case=end

 */

