/*
 * @lc app=leetcode.cn id=217 lang=typescript
 * @lcpr version=30403
 *
 * [217] 存在重复元素
 *
 * https://leetcode.cn/problems/contains-duplicate/description/
 *
 * algorithms
 * Easy (56.03%)
 * Likes:    1168
 * Dislikes: 0
 * Total Accepted:    948.6K
 * Total Submissions: 1.7M
 * Testcase Example:  '[1,2,3,1]\n[1,2,3,4]\n[1,1,1,3,3,4,3,2,4,2]'
 *
 * 给你一个整数数组 nums 。如果任一值在数组中出现 至少两次 ，返回 true ；如果数组中每个元素互不相同，返回 false 。
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [1,2,3,1]
 * 
 * 输出：true
 * 
 * 解释：
 * 
 * 元素 1 在下标 0 和 3 出现。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [1,2,3,4]
 * 
 * 输出：false
 * 
 * 解释：
 * 
 * 所有元素都不同。
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [1,1,1,3,3,4,3,2,4,2]
 * 
 * 输出：true
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= nums.length <= 10^5
 * -10^9 <= nums[i] <= 10^9
 * 
 * 
 */

// @lc code=start
// function containsDuplicate(nums: number[]): boolean {
//     //双指针
//     let left = 0, right = 1
//     nums.sort((a, b) => a - b)
//     //排序之后，只要相邻两个元素不同，即可判断有没有重复元素
//     while (right < nums.length) {
//         if (nums[left] != nums[right]) {
//             left = right
//             right++
//         } else {
//             return true
//         }
//     }
//     return false
// };
function containsDuplicate(nums: number[]): boolean {
    //哈希表解法
    let set = new Set<number>
    for (const n of nums) {
        if (set.has(n)) {
            return true
        }
        set.add(n)
    }
    return false
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3,1]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,4]\n
// @lcpr case=end

// @lcpr case=start
// [1,1,1,3,3,4,3,2,4,2]\n
// @lcpr case=end

 */

