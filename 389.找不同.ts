/*
 * @lc app=leetcode.cn id=389 lang=typescript
 * @lcpr version=30403
 *
 * [389] 找不同
 *
 * https://leetcode.cn/problems/find-the-difference/description/
 *
 * algorithms
 * Easy (62.44%)
 * Likes:    561
 * Dislikes: 0
 * Total Accepted:    277.9K
 * Total Submissions: 445.4K
 * Testcase Example:  '"abcd"\n"abcde"\n""\n"y"'
 *
 * 给定两个字符串 s 和 t ，它们只包含小写字母。
 * 
 * 字符串 t 由字符串 s 随机重排，然后在随机位置添加一个字母。
 * 
 * 请找出在 t 中被添加的字母。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：s = "abcd", t = "abcde"
 * 输出："e"
 * 解释：'e' 是那个被添加的字母。
 * 
 * 
 * 示例 2：
 * 
 * 输入：s = "", t = "y"
 * 输出："y"
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 <= s.length <= 1000
 * t.length == s.length + 1
 * s 和 t 只包含小写字母
 * 
 * 
 */

// @lc code=start
function findTheDifference(s: string, t: string): string {
    //练习异或
    let res = s + t, r = 0
    for (const i of res) {
        r ^= i.charCodeAt(0)
    }
    return String.fromCharCode(r)
};
// @lc code=end



/*
// @lcpr case=start
// "abcd"\n"abcde"\n
// @lcpr case=end

// @lcpr case=start
// ""\n"y"\n
// @lcpr case=end

 */

