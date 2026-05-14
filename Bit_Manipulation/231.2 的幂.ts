/*
 * @lc app=leetcode.cn id=231 lang=typescript
 * @lcpr version=30403
 *
 * [231] 2 的幂
 *
 * https://leetcode.cn/problems/power-of-two/description/
 *
 * algorithms
 * Easy (49.88%)
 * Likes:    807
 * Dislikes: 0
 * Total Accepted:    447.3K
 * Total Submissions: 896.8K
 * Testcase Example:  '1\n16\n3'
 *
 * 给你一个整数 n，请你判断该整数是否是 2 的幂次方。如果是，返回 true ；否则，返回 false 。
 * 
 * 如果存在一个整数 x 使得 n == 2^x ，则认为 n 是 2 的幂次方。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：n = 1
 * 输出：true
 * 解释：2^0 = 1
 * 
 * 
 * 示例 2：
 * 
 * 输入：n = 16
 * 输出：true
 * 解释：2^4 = 16
 * 
 * 
 * 示例 3：
 * 
 * 输入：n = 3
 * 输出：false
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
 * 进阶：你能够不使用循环/递归解决此问题吗？
 * 
 */

// @lc code=start
function isPowerOfTwo(n: number): boolean {
    if (n <= 0) return false
    while (n >= 2) {
        if (n % 2 != 0) {
            return false
        }
        n = n / 2
    }
    return true
};
// @lc code=end



/*
// @lcpr case=start
// 1\n
// @lcpr case=end

// @lcpr case=start
// 16\n
// @lcpr case=end

// @lcpr case=start
// 3\n
// @lcpr case=end

 */

