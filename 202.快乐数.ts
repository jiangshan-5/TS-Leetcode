/*
 * @lc app=leetcode.cn id=202 lang=typescript
 * @lcpr version=30403
 *
 * [202] 快乐数
 *
 * https://leetcode.cn/problems/happy-number/description/
 *
 * algorithms
 * Easy (66.04%)
 * Likes:    1815
 * Dislikes: 0
 * Total Accepted:    736.5K
 * Total Submissions: 1.1M
 * Testcase Example:  '19\n2'
 *
 * 编写一个算法来判断一个数 n 是不是快乐数。
 * 
 * 「快乐数」 定义为：
 * 
 * 
 * 对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和。
 * 然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。
 * 如果这个过程 结果为 1，那么这个数就是快乐数。
 * 
 * 
 * 如果 n 是 快乐数 就返回 true ；不是，则返回 false 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：n = 19
 * 输出：true
 * 解释：
 * 1^2 + 9^2 = 82
 * 8^2 + 2^2 = 68
 * 6^2 + 8^2 = 100
 * 1^2 + 0^2 + 0^2 = 1
 * 
 * 
 * 示例 2：
 * 
 * 输入：n = 2
 * 输出：false
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= n <= 2^31 - 1
 * 
 * 
 */

// @lc code=start
function isHappy(n: number): boolean {
    // 核心辅助函数：计算各位数字的平方和
    const getNext = (num: number): number => {
        let sum = 0;
        while (num > 0) {
            let d = num % 10;
            sum += d * d;
            num = Math.floor(num / 10);
        }
        return sum;
    };

    /**
     * [解法一：哈希集合法]
     * 思路：利用 Set 记录出现过的数字，一旦重复则说明进入死循环。
     */
    /*
    const seen = new Set<number>();
    while (n !== 1 && !seen.has(n)) {
        seen.add(n);
        n = getNext(n);
    }
    return n === 1;
    */

    /**
     * [解法二：数学/递归法]
     * 思路：不快乐数最终都会进入以 4 为首的循环，可以直接判断。
     */
    /*
    if (n === 1) return true;
    if (n === 4) return false;
    return isHappy(getNext(n));
    */

    /**
     * [解法三：快慢指针法]
     * 思路：模拟链表判圈，空间复杂度为 O(1)。
     */
    let slow = n;
    let fast = getNext(n);
    while (fast !== 1 && slow !== fast) {
        slow = getNext(slow);
        fast = getNext(getNext(fast));
    }
    return fast === 1;
};
// @lc code=end



/*
// @lcpr case=start
// 99\n
// @lcpr case=end

// @lcpr case=start
// 2\n
// @lcpr case=end

 */

