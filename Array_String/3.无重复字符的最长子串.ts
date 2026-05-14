// LeetCode 第 3 题

function lengthOfLongestSubstring(s: string): number {
    let res = 0
    let i = 0, j = 0  // 窗口左边界 i，右边界 j
    let set = new Set<string>()

    // 右边界 j 移动，扩大窗口
    while (j < s.length) {
        const char = s[j]

        // 如果窗口中已经存在当前字符
        while (set.has(char)) {
            // 左边界 i 移动，缩小窗口
            set.delete(s[i])
            i++
        }

        // 窗口中无重复字符，添加当前字符
        set.add(char)

        // 更新最长无重复子串长度
        res = Math.max(res, j - i + 1)

        // 继续向右移动右边界
        j++
    }

    return res
};