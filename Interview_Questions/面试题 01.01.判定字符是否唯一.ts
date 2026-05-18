/*
 * @lc app=leetcode.cn id=面试题 01.01 lang=typescript
 * @lcpr version=30403
 *
 * [面试题 01.01] 判定字符是否唯一
 *
 * https://leetcode.cn/problems/is-unique-lcci/description/
 *
 * LCCI
 * Easy (71.42%)
 * Likes:    366
 * Dislikes: 0
 * Total Accepted:    191.1K
 * Total Submissions: 267.5K
 * Testcase Example:  '"leetcode"\n"abc"'
 *
 * 实现一个算法，确定一个字符串 s 的所有字符是否全都不同。
 * 
 * 示例 1：
 * 
 * 输入: s = "leetcode"
 * 输出: false 
 * 
 * 
 * 示例 2：
 * 
 * 输入: s = "abc"
 * 输出: true
 * 
 * 
 * 限制：
 * 
 * 
 * 0 <= len(s) <= 100 
 * s[i]仅包含小写字母
 * 如果你不使用额外的数据结构，会很加分。
 * 
 * 
 */

// @lc code=start
// function isUnique(astr: string): boolean {
//     //哈希表解法
//     let set = new Set<string>()
//     for (const char of astr) {
//         if (!set.has(char)) set.add(char)
//         else return false
//     }
//     return true
// };

function isUnique(astr: string): boolean {
    //位运算解法
    let mark = 0;
    for (const char of astr) {
        const moveBit = char.charCodeAt(0) - 97; // 'a'.charCodeAt(0) === 97
        if ((mark & (1 << moveBit)) !== 0) {
            return false;
        }
        mark |= (1 << moveBit);
    }
    return true;
};
// @lc code=end



/*
// @lcpr case=start
// "leetcode"\n
// @lcpr case=end

// @lcpr case=start
// "abc"\n
// @lcpr case=end

 */

