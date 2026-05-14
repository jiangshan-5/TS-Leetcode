/*
 * @lc app=leetcode.cn id=383 lang=typescript
 * @lcpr version=30403
 *
 * [383] 赎金信
 *
 * https://leetcode.cn/problems/ransom-note/description/
 *
 * algorithms
 * Easy (68.13%)
 * Likes:    1025
 * Dislikes: 0
 * Total Accepted:    711.8K
 * Total Submissions: 1M
 * Testcase Example:  '"a"\n"b"\n"aa"\n"ab"\n"aa"\n"aab"'
 *
 * 给你两个字符串：ransomNote 和 magazine ，判断 ransomNote 能不能由 magazine 里面的字符构成。
 * 
 * 如果可以，返回 true ；否则返回 false 。
 * 
 * magazine 中的每个字符只能在 ransomNote 中使用一次。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：ransomNote = "a", magazine = "b"
 * 输出：false
 * 
 * 
 * 示例 2：
 * 
 * 输入：ransomNote = "aa", magazine = "ab"
 * 输出：false
 * 
 * 
 * 示例 3：
 * 
 * 输入：ransomNote = "aa", magazine = "aab"
 * 输出：true
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= ransomNote.length, magazine.length <= 10^5
 * ransomNote 和 magazine 由小写英文字母组成
 * 
 * 
 */

// @lc code=start
/**
 * 优化解法：使用 Int32Array 提升性能 (O(m+n) 时间, O(1) 空间)
 */
function canConstruct(ransomNote: string, magazine: string): boolean {
    if (ransomNote.length > magazine.length) return false;

    const cnt = new Int32Array(26);
    const base = 'a'.charCodeAt(0);

    for (const char of magazine) {
        cnt[char.charCodeAt(0) - base]++;
    }

    for (const char of ransomNote) {
        if (--cnt[char.charCodeAt(0) - base] < 0) return false;
    }

    return true;
};

/**
 * 原解法：使用 Map (通用性强，但性能略低于数组)
 * 
 * function canConstruct(ransomNote: string, magazine: string): boolean {
 *     if (ransomNote.length > magazine.length) return false
 *     let map = new Map()
 *     for (let i = 0; i < magazine.length; i++) {
 *         map.set(magazine[i], (map.get(magazine[i]) || 0) + 1)
 *     }
 *     for (let i = 0; i < ransomNote.length; i++) {
 *         if (map.get(ransomNote[i]) == 0 || !map.has(ransomNote[i])) return false
 *         map.set(ransomNote[i], map.get(ransomNote[i]) - 1)
 *     }
 *     return true
 * };
 */
// @lc code=end



/*
// @lcpr case=start
// "a"\n"b"\n
// @lcpr case=end

// @lcpr case=start
// "aa"\n"ab"\n
// @lcpr case=end

// @lcpr case=start
// "aa"\n"aab"\n
// @lcpr case=end

 */

