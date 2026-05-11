/*
 * @lc app=leetcode.cn id=290 lang=typescript
 * @lcpr version=30403
 *
 * [290] 单词规律
 *
 * https://leetcode.cn/problems/word-pattern/description/
 *
 * algorithms
 * Easy (45.53%)
 * Likes:    742
 * Dislikes: 0
 * Total Accepted:    270K
 * Total Submissions: 592.8K
 * Testcase Example:  '"abba"\n"dog cat cat dog"\n"abba"\n"dog cat cat fish"\n"aaaa"\n"dog cat cat dog"'
 *
 * 给定一种规律 pattern 和一个字符串 s ，判断 s 是否遵循相同的规律。
 * 
 * 这里的 遵循 指完全匹配，例如， pattern 里的每个字母和字符串 s 中的每个非空单词之间存在着双向连接的对应规律。具体来说：
 * 
 * 
 * pattern 中的每个字母都 恰好 映射到 s 中的一个唯一单词。
 * s 中的每个唯一单词都 恰好 映射到 pattern 中的一个字母。
 * 没有两个字母映射到同一个单词，也没有两个单词映射到同一个字母。
 * 
 * 
 * 
 * 
 * 示例1:
 * 
 * 输入: pattern = "abba", s = "dog cat cat dog"
 * 输出: true
 * 
 * 示例 2:
 * 
 * 输入:pattern = "abba", s = "dog cat cat fish"
 * 输出: false
 * 
 * 示例 3:
 * 
 * 输入: pattern = "aaaa", s = "dog cat cat dog"
 * 输出: false
 * 
 * 
 * 
 * 提示:
 * 
 * 
 * 1 <= pattern.length <= 300
 * pattern 只包含小写英文字母
 * 1 <= s.length <= 3000
 * s 只包含小写英文字母和 ' '
 * s 不包含 任何前导或尾随对空格
 * s 中每个单词都被 单个空格 分隔
 * 
 * 
 */

// @lc code=start
function wordPattern(pattern: string, s: string): boolean {
    //分割字符串
    const sArray = s.split(' ')
    //建立双向映射关系
    let mapP = new Map<string, string>()
    let mapS = new Map<string, string>()
    //如果长度不一致，直接返回false
    if (pattern.length !== sArray.length) {
        return false
    }
    for (let i = 0; i < pattern.length; i++) {
        const pChar = pattern[i]
        const sWord = sArray[i]
        //如果两个map都没有这个字符或者单词，就建立映射关系
        if (!mapP.has(pChar) && !mapS.has(sWord)) {
            mapP.set(pChar, sWord)
            mapS.set(sWord, pChar)
            //如果两个map其中一个已经有这个字符或单词，就判断映射关系是否一致
        } else if (mapP.get(pChar) !== sWord || mapS.get(sWord) !== pChar) {
            return false
        }
    }
    return true
};
// @lc code=end



/*
// @lcpr case=start
// "abba"\n"dog cat cat dog"\n
// @lcpr case=end

// @lcpr case=start
// "abba"\n"dog cat cat fish"\n
// @lcpr case=end

// @lcpr case=start
// "aaaa"\n"dog cat cat dog"\n
// @lcpr case=end

 */

