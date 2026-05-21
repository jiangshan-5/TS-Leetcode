/*
 * @lc app=leetcode.cn id=263 lang=typescript
 * @lcpr version=30403
 *
 * [263] 丑数
 *
 * https://leetcode.cn/problems/ugly-number/description/
 *
 * algorithms
 * Easy (50.20%)
 * Likes:    523
 * Dislikes: 0
 * Total Accepted:    247.7K
 * Total Submissions: 493.5K
 * Testcase Example:  '6\n1\n14'
 *
 * 丑数 就是只包含质因数 2、3 和 5 的 正 整数。
 * 
 * 给你一个整数 n ，请你判断 n 是否为 丑数 。如果是，返回 true ；否则，返回 false 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：n = 6
 * 输出：true
 * 解释：6 = 2 × 3
 * 
 * 示例 2：
 * 
 * 输入：n = 1
 * 输出：true
 * 解释：1 没有质因数。
 * 
 * 示例 3：
 * 
 * 输入：n = 14
 * 输出：false
 * 解释：14 不是丑数，因为它包含了另外一个质因数 7 。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * -2^31 <= n <= 2^31 - 1
 * 
 * 
 */

// @lc code=start
function isUgly(n: number): boolean {
    while (n != 0) {
        if (n % 2 == 0) {
            n /= 2;
        } else if (n % 3 == 0) {
            n /= 3;
        } else if (n % 5 == 0) {
            n /= 5;
        } else {
            break;
        }
    }
    return n == 1;
};
// @lc code=end



/*
// @lcpr case=start
// 6\n
// @lcpr case=end

// @lcpr case=start
// 1\n
// @lcpr case=end

// @lcpr case=start
// 14\n
// @lcpr case=end

 */

