/*
 * @lc app=leetcode.cn id=264 lang=typescript
 * @lcpr version=30403
 *
 * [264] 丑数 II
 *
 * https://leetcode.cn/problems/ugly-number-ii/description/
 *
 * algorithms
 * Medium (58.14%)
 * Likes:    1306
 * Dislikes: 0
 * Total Accepted:    216.1K
 * Total Submissions: 371.7K
 * Testcase Example:  '10\n1'
 *
 * 给你一个整数 n ，请你找出并返回第 n 个 丑数 。
 * 
 * 丑数 就是质因子只包含 2、3 和 5 的正整数。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：n = 10
 * 输出：12
 * 解释：[1, 2, 3, 4, 5, 6, 8, 9, 10, 12] 是由前 10 个丑数组成的序列。
 * 
 * 
 * 示例 2：
 * 
 * 输入：n = 1
 * 输出：1
 * 解释：1 通常被视为丑数。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= n <= 1690
 * 
 * 
 */

// @lc code=start
function nthUglyNumber(n: number): number {
    const dp = new Int32Array(n + 1);
    dp[1] = 1;
    let p2 = 1, p3 = 1, p5 = 1;
    for (let i = 2; i <= n; i++) {
        const num2 = dp[p2] * 2;
        const num3 = dp[p3] * 3;
        const num5 = dp[p5] * 5;
        const minNum = Math.min(num2, num3, num5);
        dp[i] = minNum;
        if (minNum === num2) p2++;
        if (minNum === num3) p3++;
        if (minNum === num5) p5++;
    }
    return dp[n];
}
// @lc code=end



/*
// @lcpr case=start
// 10\n
// @lcpr case=end

// @lcpr case=start
// 1\n
// @lcpr case=end

 */

