/*
 * @lc app=leetcode.cn id=374 lang=typescript
 * @lcpr version=30403
 *
 * [374] 猜数字大小
 *
 * https://leetcode.cn/problems/guess-number-higher-or-lower/description/
 *
 * algorithms
 * Easy (53.17%)
 * Likes:    375
 * Dislikes: 0
 * Total Accepted:    224.5K
 * Total Submissions: 422.1K
 * Testcase Example:  '10\n6\n1\n1\n2\n1'
 *
 * 我们正在玩猜数字游戏。猜数字游戏的规则如下：
 * 
 * 我会从 1 到 n 随机选择一个数字。 请你猜选出的是哪个数字。（我选的数字在整个游戏中保持不变）。
 * 
 * 如果你猜错了，我会告诉你，我选出的数字比你猜测的数字大了还是小了。
 * 
 * 你可以通过调用一个预先定义好的接口 int guess(int num) 来获取猜测结果，返回值一共有三种可能的情况：
 * 
 * 
 * -1：你猜的数字比我选出的数字大 （即 num > pick）。
 * 1：你猜的数字比我选出的数字小 （即 num < pick）。
 * 0：你猜的数字与我选出的数字相等。（即 num == pick）。
 * 
 * 
 * 返回我选出的数字。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：n = 10, pick = 6
 * 输出：6
 * 
 * 
 * 示例 2：
 * 
 * 输入：n = 1, pick = 1
 * 输出：1
 * 
 * 
 * 示例 3：
 * 
 * 输入：n = 2, pick = 1
 * 输出：1
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= n <= 2^31 - 1
 * 1 <= pick <= n
 * 
 * 
 */

// @lc code=start
/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */


/* 原代码：
function guessNumber(n: number): number {
    //二分法
    let x = Math.floor(n / 2)
    let left = 1
    let right = n
    while (left <= right) {
        const res = guess(x)
        if (res === 0) return x
        if (res === 1) {
            left = x + 1
        }
        else {
            right = x - 1
        }
        x = Math.floor((left + right) / 2)
    }
    return x
};
*/

/**
 * 优化后的版本：
 * 1. 将 mid 计算移入循环，结构更清晰。
 * 2. 使用 (left + right) >>> 1 代替 Math.floor，更简洁且能处理大数溢出。
 * 3. 减少了多余的变量初始化。
 */
function guessNumber(n: number): number {
    let left = 1;
    let right = n;

    while (left <= right) {
        // 使用无符号右移，等同于 Math.floor((left + right) / 2)，且在其他语言中可防溢出
        const mid = (left + right) >>> 1;
        const res = guess(mid);

        if (res === 0) {
            return mid;
        } else if (res === 1) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return left;
};
// @lc code=end



/*
// @lcpr case=start
// 10\n6\n
// @lcpr case=end

// @lcpr case=start
// 1\n1\n
// @lcpr case=end

// @lcpr case=start
// 2\n1\n
// @lcpr case=end

 */

