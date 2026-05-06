/*
 * @lc app=leetcode.cn id=283 lang=typescript
 * @lcpr version=30403
 *
 * [283] 移动零
 *
 * https://leetcode.cn/problems/move-zeroes/description/
 *
 * algorithms
 * Easy (63.78%)
 * Likes:    2906
 * Dislikes: 0
 * Total Accepted:    2.3M
 * Total Submissions: 3.7M
 * Testcase Example:  '[0,1,0,3,12]\n[0]'
 *
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 * 
 * 请注意 ，必须在不复制数组的情况下原地对数组进行操作。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 输入: nums = [0,1,0,3,12]
 * 输出: [1,3,12,0,0]
 * 
 * 
 * 示例 2:
 * 
 * 输入: nums = [0]
 * 输出: [0]
 * 
 * 
 * 
 * 提示:
 * 
 * 
 * 
 * 1 <= nums.length <= 10^4
 * -2^31 <= nums[i] <= 2^31 - 1
 * 
 * 
 * 
 * 
 * 进阶：你能尽量减少完成的操作次数吗？
 * 
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    //fast指针探路，slow指针记录位置
    //fast指针和slow重合时，fast无需置0
    let fast = 0, slow = 0
    if (nums.length <= 1) return
    while (fast <= nums.length - 1) {
        if (nums[fast] !== 0) {
            nums[slow] = nums[fast]
            if (fast != slow) nums[fast] = 0
            slow++
        }
        fast++
    }
};
// @lc code=end



/*
// @lcpr case=start
// [0,1,0,3,12,11,0,0,2,0]\n
// @lcpr case=end

// @lcpr case=start
// [0]\n
// @lcpr case=end

 */

