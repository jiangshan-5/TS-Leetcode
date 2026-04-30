/*
 * @lc app=leetcode.cn id=118 lang=typescript
 * @lcpr version=30403
 *
 * [118] 杨辉三角
 *
 * https://leetcode.cn/problems/pascals-triangle/description/
 *
 * algorithms
 * Easy (77.95%)
 * Likes:    1362
 * Dislikes: 0
 * Total Accepted:    852.8K
 * Total Submissions: 1.1M
 * Testcase Example:  '5\n1'
 *
 * 给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。
 * 
 * 在「杨辉三角」中，每个数是它左上方和右上方的数的和。
 * 
 * 
 * 
 * 
 * 
 * 示例 1:
 * 
 * 输入: numRows = 5
 * 输出: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
 * 
 * 
 * 示例 2:
 * 
 * 输入: numRows = 1
 * 输出: [[1]]
 * 
 * 
 * 
 * 
 * 提示:
 * 
 * 
 * 1 <= numRows <= 30
 * 
 * 
 */

// @lc code=start
function generate(numRows: number): number[][] {
    //特殊
    if (numRows == 1) return [[1]]
    if (numRows == 2) return [[1], [1, 1]]
    //dp
    const dp: number[][] = []
    //边界
    dp[0] = [1]
    dp[1] = [1, 1]
    //计算
    for (let i = 2; i < numRows; i++) {
        dp[i] = []
        for (let j = 0; j < i + 1; j++) {
            //边
            if (j == 0 || j == i) dp[i][j] = 1
            //中
            else dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j]
        }
    }
    return dp
};
// @lc code=end



/*
// @lcpr case=start
// 5\n
// @lcpr case=end

// @lcpr case=start
// 1\n
// @lcpr case=end

 */

