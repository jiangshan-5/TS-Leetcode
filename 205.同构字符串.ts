/*
 * @lc app=leetcode.cn id=205 lang=typescript
 * @lcpr version=30403
 *
 * [205] 同构字符串
 *
 * https://leetcode.cn/problems/isomorphic-strings/description/
 *
 * algorithms
 * Easy (50.45%)
 * Likes:    831
 * Dislikes: 0
 * Total Accepted:    391K
 * Total Submissions: 774.9K
 * Testcase Example:  '"egg"\n"add"\n"foo"\n"bar"\n"paper"\n"title"'
 *
 * 给定两个字符串 s 和 t ，判断它们是否是同构的。
 * 
 * 如果 s 中的字符可以按某种映射关系替换得到 t ，那么这两个字符串是同构的。
 * 
 * 
 * 每个出现的字符都应当映射到另一个字符，同时不改变字符的顺序。不同字符不能映射到同一个字符上，相同字符只能映射到同一个字符上，字符可以映射到自己本身。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "egg", t = "add"
 * 
 * 输出：true
 * 
 * 解释：
 * 
 * 字符串 s 和 t 可以通过以下方式变得相同：
 * 
 * 
 * 将 'e' 映射为 'a'。
 * 将 'g' 映射为 'd'。
 * 
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "f11", t = "b23"
 * 
 * 输出：false
 * 
 * 解释：
 * 
 * 字符串 s 和 t 无法变得相同，因为 '1' 需要同时映射到 '2' 和 '3'。
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：s = "paper", t = "title"
 * 
 * 输出：true
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 
 * 
 * 1 <= s.length <= 5 * 10^4
 * t.length == s.length
 * s 和 t 由任意有效的 ASCII 字符组成
 * 
 * 
 */

// @lc code=start
function isIsomorphic(s: string, t: string): boolean {
    //构建映射
    let maps = new Map<string, string>//s=>t
    let mapt = new Map<string, string>//t=>s
    for (let i = 0; i < s.length; i++) {
        //如果没有映射关系，保持只有一种映射关系
        if (!maps.has(s[i])) {
            maps.set(s[i], t[i])
        }
        //保证双向都是单向映射关系
        if (!mapt.has(t[i])) {
            mapt.set(t[i], s[i])
        }
        //任意单项映射不满足即false
        if (maps.get(s[i]) != t[i] || mapt.get(t[i]) != s[i]) {
            return false
        }
    }
    return true
};
// @lc code=end



/*
// @lcpr case=start
// "egg"\n"add"\n
// @lcpr case=end

// @lcpr case=start
// "foo"\n"bar"\n
// @lcpr case=end

// @lcpr case=start
// "paper"\n"title"\n
// @lcpr case=end

 */

