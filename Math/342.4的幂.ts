/*
 * @lc app=leetcode.cn id=342 lang=typescript
 * @lcpr version=30403
 *
 * [342] 4的幂
 *
 * https://leetcode.cn/problems/power-of-four/description/
 *
 * algorithms
 * Easy (54.05%)
 * Likes:    424
 * Dislikes: 0
 * Total Accepted:    192.1K
 * Total Submissions: 355.4K
 * Testcase Example:  '16\n5\n1'
 *
 * 给定一个整数，写一个函数来判断它是否是 4 的幂次方。如果是，返回 true ；否则，返回 false 。
 * 
 * 整数 n 是 4 的幂次方需满足：存在整数 x 使得 n == 4^x
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：n = 16
 * 输出：true
 * 
 * 
 * 示例 2：
 * 
 * 输入：n = 5
 * 输出：false
 * 
 * 
 * 示例 3：
 * 
 * 输入：n = 1
 * 输出：true
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
 * 
 * 
 * 进阶：你能不使用循环或者递归来完成本题吗？
 * 
 */

// @lc code=start
function isPowerOfFour(n: number): boolean {
    if (n <= 0) return false
    while (n > 1) {
        n /= 4
    }
    return n === 1
};
// @lc code=end



/*
// @lcpr case=start
// 16\n
// @lcpr case=end

// @lcpr case=start
// 5\n
// @lcpr case=end

// @lcpr case=start
// 1\n
// @lcpr case=end

 */

