/*
 * @lc app=leetcode.cn id=70 lang=typescript
 * @lcpr version=30403
 *
 * [70] 爬楼梯
 *
 * https://leetcode.cn/problems/climbing-stairs/description/
 *
 * algorithms
 * Easy (55.68%)
 * Likes:    4065
 * Dislikes: 0
 * Total Accepted:    2.2M
 * Total Submissions: 3.9M
 * Testcase Example:  '2\n3'
 *
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 * 
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：n = 2
 * 输出：2
 * 解释：有两种方法可以爬到楼顶。
 * 1. 1 阶 + 1 阶
 * 2. 2 阶
 * 
 * 示例 2：
 * 
 * 输入：n = 3
 * 输出：3
 * 解释：有三种方法可以爬到楼顶。
 * 1. 1 阶 + 1 阶 + 1 阶
 * 2. 1 阶 + 2 阶
 * 3. 2 阶 + 1 阶
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= n <= 45
 * 
 * 
 */

// @lc code=start
function climbStairs(n: number): number {
    //动态规划
    // 爬到第n阶楼梯的方法数，等于爬到第n-1阶楼梯的方法数加上爬到第n-2阶楼梯的方法数
    if (n <= 2) return n;
    //状态转移方程
    const dp: number[] = []
    //初始化边界
    dp[1] = 1
    dp[2] = 2
    //迭代
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n]
};
// @lc code=end



/*
// @lcpr case=start
// 2\n
// @lcpr case=end

// @lcpr case=start
// 3\n
// @lcpr case=end

 */

