/*
 * @lc app=leetcode.cn id=171 lang=typescript
 * @lcpr version=30403
 *
 * [171] Excel 表列序号
 *
 * https://leetcode.cn/problems/excel-sheet-column-number/description/
 *
 * algorithms
 * Easy (71.92%)
 * Likes:    440
 * Dislikes: 0
 * Total Accepted:    208.6K
 * Total Submissions: 290.1K
 * Testcase Example:  '"A"\n"AB"\n"ZY"'
 *
 * 给你一个字符串 columnTitle ，表示 Excel 表格中的列名称。返回 该列名称对应的列序号 。
 * 
 * 例如：
 * 
 * A -> 1
 * B -> 2
 * C -> 3
 * ...
 * Z -> 26
 * AA -> 27
 * AB -> 28 
 * ...
 * 
 * 
 * 
 * 示例 1:
 * 
 * 输入: columnTitle = "A"
 * 输出: 1
 * 
 * 
 * 示例 2:
 * 
 * 输入: columnTitle = "AB"
 * 输出: 28
 * 
 * 
 * 示例 3:
 * 
 * 输入: columnTitle = "ZY"
 * 输出: 701
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= columnTitle.length <= 7
 * columnTitle 仅由大写英文组成
 * columnTitle 在范围 ["A", "FXSHRXW"] 内
 * 
 * 
 */

// @lc code=start
function titleToNumber(columnTitle: string): number {
    let res = 0
    for (let i = 0; i < columnTitle.length; i++) {
        // 获取当前字符对应的数字 (A=1, B=2...)
        // 'A' 的 charCode 是 65，所以减去 64 得到 1
        const num = columnTitle.charCodeAt(i) - 64;

        // 核心逻辑：之前的累积结果升权（乘以26），然后加上当前位的数字
        res = res * 26 + num;
    }
    return res
};
// @lc code=end



/*
// @lcpr case=start
// "A"\n
// @lcpr case=end

// @lcpr case=start
// "AB"\n
// @lcpr case=end

// @lcpr case=start
// "QX"\n
// @lcpr case=end

 */

