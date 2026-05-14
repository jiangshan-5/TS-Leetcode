/*
 * @lc app=leetcode.cn id=260 lang=typescript
 * @lcpr version=30403
 *
 * [260] 只出现一次的数字 III
 *
 * https://leetcode.cn/problems/single-number-iii/description/
 *
 * algorithms
 * Medium (69.69%)
 * Likes:    981
 * Dislikes: 0
 * Total Accepted:    178.5K
 * Total Submissions: 256.2K
 * Testcase Example:  '[1,2,1,3,2,5]\n[-1,0]\n[0,1]'
 *
 * 给你一个整数数组 nums，其中恰好有两个元素只出现一次，其余所有元素均出现两次。 找出只出现一次的那两个元素。你可以按 任意顺序 返回答案。
 * 
 * 你必须设计并实现线性时间复杂度的算法且仅使用常量额外空间来解决此问题。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：nums = [1,2,1,3,2,5]
 * 输出：[3,5]
 * 解释：[5, 3] 也是有效的答案。
 * 
 * 
 * 示例 2：
 * 
 * 输入：nums = [-1,0]
 * 输出：[-1,0]
 * 
 * 
 * 示例 3：
 * 
 * 输入：nums = [0,1]
 * 输出：[1,0]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 2 <= nums.length <= 3 * 10^4
 * -2^31 <= nums[i] <= 2^31 - 1
 * 除两个只出现一次的整数外，nums 中的其他数字都出现两次
 * 
 * 
 */

// @lc code=start
function singleNumber(nums: number[]): number[] {
    // 1. 全员异或，得到 xorSum = a ^ b
    let xorSum = 0;
    for (const num of nums) {
        xorSum ^= num;
    }

    // 2. 提取 xorSum 二进制中最右边的那个 1 (Lowbit)
    // 这个 1 是 a 和 b 的分歧点
    let lsb = xorSum & -xorSum;

    // 3. 根据这个分歧点，将原数组分成两组进行异或消消乐
    let a = 0, b = 0;
    for (const num of nums) {
        if ((num & lsb) !== 0) {
            // 该位为 1 的组
            a ^= num;
        } else {
            // 该位为 0 的组
            b ^= num;
        }
    }

    return [a, b];
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,1,3,2,5]\n
// @lcpr case=end

// @lcpr case=start
// [-1,0]\n
// @lcpr case=end

// @lcpr case=start
// [0,1]\n
// @lcpr case=end

 */


export {};
