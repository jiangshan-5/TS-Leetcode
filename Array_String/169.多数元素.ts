/*
 * @lc app=leetcode.cn id=169 lang=typescript
 * @lcpr version=30403
 *
 * [169] 多数元素
 *
 * https://leetcode.cn/problems/majority-element/description/
 *
 * algorithms
 * Easy (67.21%)
 * Likes:    2691
 * Dislikes: 0
 * Total Accepted:    1.5M
 * Total Submissions: 2.3M
 * Testcase Example:  '[3,2,3]\n[2,2,1,1,1,2,2]'
 *
 * 给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
 * 
 * 你可以假设数组是非空的，并且给定的数组总是存在多数元素。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：nums = [3,2,3]
 * 输出：3
 * 
 * 示例 2：
 * 
 * 输入：nums = [2,2,1,1,1,2,2]
 * 输出：2
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * n == nums.length
 * 1 <= n <= 5 * 10^4
 * -10^9 <= nums[i] <= 10^9
 * 输入保证数组中一定有一个多数元素。
 * 
 * 
 * 
 * 
 * 进阶：尝试设计时间复杂度为 O(n)、空间复杂度为 O(1) 的算法解决此问题。
 * 
 */

// @lc code=start
/**
 * 解法一：哈希表 (Hash Table)
 * 时间复杂度: O(n)
 * 空间复杂度: O(n)
 */
// function majorityElement(nums: number[]): number {
//     const half = nums.length / 2;
//     const map = new Map<number, number>();

//     for (const num of nums) {
//         const count = (map.get(num) || 0) + 1;
//         if (count > half) return num;
//         map.set(num, count);
//     }

//     return -1;
// };

/**
 * 解法二：摩尔投票法 (Boyer-Moore Voting Algorithm)
 * 时间复杂度: O(n)
 * 空间复杂度: O(1)
 */
function majorityElement(nums: number[]): number {
    let candidate = 0;
    let count = 0;

    for (const num of nums) {
        // 当计数归零时，更换候选人
        if (count === 0) {
            candidate = num;
        }
        
        // 相同的数字加 1，不同的数字减 1（抵消）
        count += (num === candidate) ? 1 : -1;
    }

    return candidate;
};
// @lc code=end



/*
// @lcpr case=start
// [3,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [2,2,1,1,1,2,2]\n
// @lcpr case=end

 */

