/*
 * @lc app=leetcode.cn id=面试题 01.02 lang=typescript
 * @lcpr version=30403
 *
 * [面试题 01.02] 判定是否互为字符重排
 *
 * https://leetcode.cn/problems/check-permutation-lcci/description/
 *
 * LCCI
 * Easy (65.71%)
 * Likes:    188
 * Dislikes: 0
 * Total Accepted:    151.9K
 * Total Submissions: 231.1K
 * Testcase Example:  '"abc"\n"bca"\n"abc"\n"bad"'
 *
 * 给定两个由小写字母组成的字符串 s1 和 s2，请编写一个程序，确定其中一个字符串的字符重新排列后，能否变成另一个字符串。
 * 
 * 示例 1：
 * 
 * 输入: s1 = "abc", s2 = "bca"
 * 输出: true 
 * 
 * 
 * 示例 2：
 * 
 * 输入: s1 = "abc", s2 = "bad"
 * 输出: false
 * 
 * 
 * 说明：
 * 
 * 
 * 0 <= len(s1) <= 100 
 * 0 <= len(s2) <= 100 
 * 
 * 
 */

// @lc code=start
// function CheckPermutation(s1: string, s2: string): boolean {
//     //数组排序解法
//     let sA = s1.split('').sort().join('')
//     let sB = s2.split('').sort().join('')
//     return sA == sB
// };

function CheckPermutation(s1: string, s2: string): boolean {
    //哈希表解法
    let mapa = new Map<string, number>()
    if (s1.length != s2.length) {
        return false
    }
    for (let i = 0; i < s1.length; i++) {
        if (mapa.has(s1[i])) {
            mapa.set(s1[i], mapa.get(s1[i])! + 1)
        } else {
            mapa.set(s1[i], 1)
        }
    }
    for (let i = 0; i < s2.length; i++) {
        if (mapa.has(s2[i])) {
            mapa.set(s2[i], mapa.get(s2[i])! - 1)
            if (mapa.get(s2[i]) == 0) {
                mapa.delete(s2[i])
            }
        } else {
            return false
        }
    }
    return true
};
// @lc code=end



/*
// @lcpr case=start
// "abc"\n"bca"\n
// @lcpr case=end

// @lcpr case=start
// "abc"\n"bad"\n
// @lcpr case=end

 */

