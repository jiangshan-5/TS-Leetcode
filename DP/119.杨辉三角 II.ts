/*
 * @lc app=leetcode.cn id=119 lang=typescript
 * @lcpr version=30403
 *
 * [119] 杨辉三角 II
 *
 * https://leetcode.cn/problems/pascals-triangle-ii/description/
 *
 * algorithms
 * Easy (69.63%)
 * Likes:    614
 * Dislikes: 0
 * Total Accepted:    369.2K
 * Total Submissions: 530.2K
 * Testcase Example:  '3\n0\n1'
 *
 * 给定一个非负索引 rowIndex，返回「杨辉三角」的第 rowIndex 行。
 * 
 * 在「杨辉三角」中，每个数是它左上方和右上方的数的和。
 * 
 * 
 * 
 * 
 * 
 * 示例 1:
 * 
 * 输入: rowIndex = 3
 * 输出: [1,3,3,1]
 * 
 * 
 * 示例 2:
 * 
 * 输入: rowIndex = 0
 * 输出: [1]
 * 
 * 
 * 示例 3:
 * 
 * 输入: rowIndex = 1
 * 输出: [1,1]
 * 
 * 
 * 
 * 
 * 提示:
 * 
 * 
 * 0 <= rowIndex <= 33
 * 
 * 
 * 
 * 
 * 进阶：
 * 
 * 你可以优化你的算法到 O(rowIndex) 空间复杂度吗？
 * 
 */

// @lc code=start
function getRow(rowIndex: number): number[] {
    if (rowIndex == 0) return [1]
    if (rowIndex == 1) return [1, 1]

    //转移方程
    const dp: number[][] = []
    //边界
    dp[0] = [1]
    dp[1] = [1, 1]
    //计算
    for (let i = 2; i <= rowIndex; i++) {
        dp[i] = []
        for (let j = 0; j < i + 1; j++) {
            if (j == 0 || j == i) {
                dp[i][j] = 1
            } else {
                dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j]
            }
        }
    }
    return dp[rowIndex]
};

// @lc code=end



/*
// @lcpr case=start
// 3\n
// @lcpr case=end

// @lcpr case=start
// 0\n
// @lcpr case=end

// @lcpr case=start
// 1\n
// @lcpr case=end

 */

