/*
 * @lc app=leetcode.cn id=168 lang=typescript
 * @lcpr version=30403
 *
 * [168] Excel 表列名称
 *
 * https://leetcode.cn/problems/excel-sheet-column-title/description/
 *
 * algorithms
 * Easy (46.07%)
 * Likes:    749
 * Dislikes: 0
 * Total Accepted:    182.9K
 * Total Submissions: 396.8K
 * Testcase Example:  '1\n28\n701'
 *
 * 给你一个整数 columnNumber ，返回它在 Excel 表中相对应的列名称。
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
 * 
 * 示例 1：
 * 
 * 输入：columnNumber = 1
 * 输出："A"
 * 
 * 
 * 示例 2：
 * 
 * 输入：columnNumber = 28
 * 输出："AB"
 * 
 * 
 * 示例 3：
 * 
 * 输入：columnNumber = 701
 * 输出："ZY"
 * 
 * 
 * 示例 4：
 * 
 * 输入：columnNumber = 2147483647
 * 输出："FXSHRXW"
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= columnNumber <= 2^31 - 1
 * 
 * 
 */

// @lc code=start
function convertToTitle(columnNumber: number): string {
    //转进制问题  
    let res = ''
    while (columnNumber > 0) {
        const num = columnNumber % 26;
        // 如果余数是 0，表示 26（即 Z），需要特殊处理
        if (num === 0) {
            res = 'Z' + res;
            columnNumber = Math.floor(columnNumber / 26) - 1;
        } else {
            // 将余数转换为对应的字母
            // 'A' 的 ASCII 码是 65
            res = String.fromCharCode(64 + num) + res;
            columnNumber = Math.floor(columnNumber / 26);
        }
    }
    return res
};
// @lc code=end



/*
// @lcpr case=start
// 1\n
// @lcpr case=end

// @lcpr case=start
// 28\n
// @lcpr case=end

// @lcpr case=start
// 701\n
// @lcpr case=end

 */

