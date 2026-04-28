/*
 * @lc app=leetcode.cn id=58 lang=typescript
 * @lcpr version=30403
 *
 * [58] 最后一个单词的长度
 *
 * https://leetcode.cn/problems/length-of-last-word/description/
 *
 * algorithms
 * Easy (48.73%)
 * Likes:    815
 * Dislikes: 0
 * Total Accepted:    788.4K
 * Total Submissions: 1.6M
 * Testcase Example:  '"Hello World"\n"   fly me   to   the moon  "\n"luffy is still joyboy"'
 *
 * 给你一个字符串 s，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中 最后一个 单词的长度。
 * 
 * 单词 是指仅由字母组成、不包含任何空格字符的最大子字符串。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：s = "Hello World"
 * 输出：5
 * 解释：最后一个单词是“World”，长度为 5。
 * 
 * 
 * 示例 2：
 * 
 * 输入：s = "   fly me   to   the moon  "
 * 输出：4
 * 解释：最后一个单词是“moon”，长度为 4。
 * 
 * 
 * 示例 3：
 * 
 * 输入：s = "luffy is still joyboy"
 * 输出：6
 * 解释：最后一个单词是长度为 6 的“joyboy”。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= s.length <= 10^4
 * s 仅有英文字母和空格 ' ' 组成
 * s 中至少存在一个单词
 * 
 * 
 */

// @lc code=start
function lengthOfLastWord(s: string): number {
    //反转字符串，然后直接找第一个空格的索引
    let str = s.split('').reverse().join('').trim()
    //开头是空格需要跳过
    let index = str.indexOf(' ')
    if (index === -1) {
        return str.length
    }
    return index
};
// @lc code=end



/*
// @lcpr case=start
// "Hello World"\n
// @lcpr case=end

// @lcpr case=start
// "   fly me   to   the moon  "\n
// @lcpr case=end

// @lcpr case=start
// "luffy is still joyboy"\n
// @lcpr case=end

 */

