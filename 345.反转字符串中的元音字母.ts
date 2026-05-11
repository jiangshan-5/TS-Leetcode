/*
 * @lc app=leetcode.cn id=345 lang=typescript
 * @lcpr version=30403
 *
 * [345] 反转字符串中的元音字母
 *
 * https://leetcode.cn/problems/reverse-vowels-of-a-string/description/
 *
 * algorithms
 * Easy (56.84%)
 * Likes:    393
 * Dislikes: 0
 * Total Accepted:    248.1K
 * Total Submissions: 436.2K
 * Testcase Example:  '"IceCreAm"\n"leetcode"'
 *
 * 给你一个字符串 s ，仅反转字符串中的所有元音字母，并返回结果字符串。
 * 
 * 元音字母包括 'a'、'e'、'i'、'o'、'u'，且可能以大小写两种形式出现不止一次。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "IceCreAm"
 * 
 * 输出："AceCreIm"
 * 
 * 解释：
 * 
 * s 中的元音是 ['I', 'e', 'e', 'A']。反转这些元音，s 变为 "AceCreIm".
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "leetcode"
 * 
 * 输出："leotcede"
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= s.length <= 3 * 10^5
 * s 由 可打印的 ASCII 字符组成
 * 
 * 
 */

// @lc code=start
function reverseVowels(s: string): string {
    //双指针解法
    //元音字母
    const vowelArr = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    const sArr = s.split('')
    let left = 0
    let right = sArr.length - 1
    while (left < right) {
        if (!vowelArr.includes(sArr[left])) {
            left++
        }
        if (!vowelArr.includes(sArr[right])) {
            right--
        }
        if (vowelArr.includes(sArr[left]) && vowelArr.includes(sArr[right])) {
            [sArr[left], sArr[right]] = [sArr[right], sArr[left]]
            left++
            right--
        }
    }
    return sArr.join('')
};
// @lc code=end



/*
// @lcpr case=start
// "IceCreAm"\n
// @lcpr case=end

// @lcpr case=start
// "leetcode"\n
// @lcpr case=end

 */

