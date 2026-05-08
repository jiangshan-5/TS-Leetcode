/*
 * @lc app=leetcode.cn id=面试题 01.06 lang=typescript
 * @lcpr version=30403
 *
 * [面试题 01.06] 字符串压缩
 *
 * https://leetcode.cn/problems/compress-string-lcci/description/
 *
 * LCCI
 * Easy (46.09%)
 * Likes:    194
 * Dislikes: 0
 * Total Accepted:    132.1K
 * Total Submissions: 286.6K
 * Testcase Example:  '"aabcccccaa"\n"abbccd"'
 *
 * 
 * 字符串压缩。利用字符重复出现的次数，编写一种方法，实现基本的字符串压缩功能。比如，字符串aabcccccaaa会变为a2b1c5a3。若“压缩”后的字符串没有变短，则返回原先的字符串。你可以假设字符串中只包含大小写英文字母（a至z）。
 * 
 * 示例 1：
 * 
 * 输入："aabcccccaaa"
 * 输出："a2b1c5a3"
 * 
 * 
 * 示例 2：
 * 
 * 输入："abbccd"
 * 输出："abbccd"
 * 解释："abbccd"压缩后为"a1b2c2d1"，比原字符串长度更长。
 * 
 * 
 * 提示：
 * 
 * 
 * 字符串长度在 [0, 50000] 范围内。
 * 
 * 
 */

// @lc code=start
// function compressString(S: string): string {
//     let resS = ''
//     let count = 1
//     for (let i = 0; i < S.length; i++) {
//         if (S[i] === S[i + 1]) {
//             count++
//         } else {
//             resS += S[i] + count
//             count = 1
//         }
//     }
//     return resS.length < S.length ? resS : S
// };

function compressString(S: string): string {
    let resS = ''
    let slow = 0, fast = 1
    while (slow < S.length) {
        // fast 往后跑，直到遇到不一样的字符或者出界
        while (fast < S.length && S[fast] === S[slow]) {
            fast++;
        }
        // 此时 fast - slow 就是当前字符 S[slow] 的个数
        resS += S[slow] + (fast - slow);
        // 让 slow 追上 fast，开始处理下一组字符
        slow = fast;
    }
    return resS.length < S.length ? resS : S
};

// @lc code=end



/*
// @lcpr case=start
// "aabcccccaa"\n
// @lcpr case=end

// @lcpr case=start
// "abbccd"\n
// @lcpr case=end

 */

