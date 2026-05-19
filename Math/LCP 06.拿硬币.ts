/*
 * @lc app=leetcode.cn id=LCP 06 lang=typescript
 * @lcpr version=30403
 *
 * [LCP 06] 拿硬币
 *
 * https://leetcode.cn/problems/na-ying-bi/description/
 *
 * algorithms
 * Easy (84.35%)
 * Likes:    134
 * Dislikes: 0
 * Total Accepted:    104.9K
 * Total Submissions: 124.4K
 * Testcase Example:  '[4,2,1]\n[2,3,10]'
 *
 * 桌上有 n 堆力扣币，每堆的数量保存在数组 coins 中。我们每次可以选择任意一堆，拿走其中的一枚或者两枚，求拿完所有力扣币的最少次数。
 * 
 * 示例 1：
 * 
 * 
 * 输入：[4,2,1]
 * 
 * 输出：4
 * 
 * 解释：第一堆力扣币最少需要拿 2 次，第二堆最少需要拿 1 次，第三堆最少需要拿 1 次，总共 4 次即可拿完。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：[2,3,10]
 * 
 * 输出：8
 * 
 * 
 * 限制：
 * 
 * 
 * 1 <= n <= 4
 * 1 <= coins[i] <= 10
 * 
 * 
 */

// @lc code=start
function minCount(coins: number[]): number {
    let res = 0
    for (const coin of coins) {
        // 向上取整 2整除
        res += Math.ceil(coin / 2)
    }
    return res
};
// @lc code=end



/*
// @lcpr case=start
// [4,2,1]\n
// @lcpr case=end

// @lcpr case=start
// [2,3,10]\n
// @lcpr case=end

 */

