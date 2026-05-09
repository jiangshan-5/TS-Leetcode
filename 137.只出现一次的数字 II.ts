/*
 * @lc app=leetcode.cn id=137 lang=typescript
 * @lcpr version=30403
 *
 * [137] 只出现一次的数字 II
 *
 * https://leetcode.cn/problems/single-number-ii/description/
 *
 * algorithms
 * Medium (72.54%)
 * Likes:    1365
 * Dislikes: 0
 * Total Accepted:    267.1K
 * Total Submissions: 368.2K
 * Testcase Example:  '[2,2,3,2]\n[0,1,0,1,0,1,99]'
 *
 * 给你一个整数数组 nums ，除某个元素仅出现 一次 外，其余每个元素都恰出现 三次 。请你找出并返回那个只出现了一次的元素。
 * 
 * 你必须设计并实现线性时间复杂度的算法且使用常数级空间来解决此问题。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：nums = [2,2,3,2]
 * 输出：3
 * 
 * 
 * 示例 2：
 * 
 * 输入：nums = [0,1,0,1,0,1,99]
 * 输出：99
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= nums.length <= 3 * 10^4
 * -2^31 <= nums[i] <= 2^31 - 1
 * nums 中，除某个元素仅出现 一次 外，其余每个元素都恰出现 三次
 * 
 * 
 */

// @lc code=start
function singleNumber(nums: number[]): number {
    let res = 0;
    
    // 依次检查二进制的每一位（一共 32 位）
    for (let i = 0; i < 32; i++) {
        let count = 0;
        
        // 遍历整个数组，统计在第 i 位上出现 1 的次数
        for (const num of nums) {
            // (num >> i) & 1 可以提取出 num 的第 i 位数字
            if (((num >> i) & 1) !== 0) {
                count++;
            }
        }
        
        // 如果第 i 位上 1 的总数不能被 3 整除
        // 说明我们要找的那个“落单的数”，在这一位上一定是 1
        if (count % 3 !== 0) {
            // 利用左移和按位或，把这一位的 1 拼接到结果 res 中
            res |= (1 << i);
        }
    }
    
    return res;
};
// @lc code=end



/*
// @lcpr case=start
// [2,2,3,2]\n
// @lcpr case=end

// @lcpr case=start
// [0,1,0,1,0,1,99]\n
// @lcpr case=end

 */

export {};
