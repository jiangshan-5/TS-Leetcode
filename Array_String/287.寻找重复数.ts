/*
 * @lc app=leetcode.cn id=287 lang=typescript
 * @lcpr version=30403
 *
 * [287] 寻找重复数
 *
 * https://leetcode.cn/problems/find-the-duplicate-number/description/
 *
 * algorithms
 * Medium (67.61%)
 * Likes:    2794
 * Dislikes: 0
 * Total Accepted:    645.3K
 * Total Submissions: 953.3K
 * Testcase Example:  '[1,3,4,2,2]\n[3,1,3,4,2]\n[3,3,3,3,3]'
 *
 * 给定一个包含 n + 1 个整数的数组 nums ，其数字都在 [1, n] 范围内（包括 1 和 n），可知至少存在一个重复的整数。
 * 
 * 假设 nums 只有 一个重复的整数 ，返回 这个重复的数 。
 * 
 * 你设计的解决方案必须 不修改 数组 nums 且只用常量级 O(1) 的额外空间。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：nums = [1,3,4,2,2]
 * 输出：2
 * 
 * 
 * 示例 2：
 * 
 * 输入：nums = [3,1,3,4,2]
 * 输出：3
 * 
 * 
 * 示例 3 :
 * 
 * 输入：nums = [3,3,3,3,3]
 * 输出：3
 * 
 * 
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= n <= 10^5
 * nums.length == n + 1
 * 1 <= nums[i] <= n
 * nums 中 只有一个整数 出现 两次或多次 ，其余整数均只出现 一次
 * 
 * 
 * 
 * 
 * 进阶：
 * 
 * 
 * 如何证明 nums 中至少存在一个重复的数字?
 * 你可以设计一个线性级时间复杂度 O(n) 的解决方案吗？
 * 
 * 
 */

// @lc code=start
// 解法一：数组排序法 (会修改原数组，且时间复杂度为 O(N log N))
// function findDuplicate(nums: number[]): number {
//     nums.sort((a, b) => a - b)
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] == nums[i + 1]) {
//             return nums[i]
//         }
//     }
//     return -1
// };

// 解法二：二分查找法 (值域二分，空间 O(1) 但时间为 O(N log N))
// function findDuplicate(nums: number[]): number {
//     let left = 1;
//     let right = nums.length - 1;
//     while (left < right) {
//         const mid = (left + right) >>> 1;
//         let cnt = 0;
//         for (const num of nums) {
//             if (num <= mid) {
//                 cnt++;
//             }
//         }
//         if (cnt > mid) {
//             right = mid;
//         } else {
//             left = mid + 1;
//         }
//     }
//     return left;
// };

// 解法三：快慢指针法 (最优解：不修改数组，常量空间 O(1)，时间 O(N))
function findDuplicate(nums: number[]): number {
    let slow = nums[0];
    let fast = nums[nums[0]];
    // 阶段 1：快慢指针首次相遇，证明有环存在
    while (slow !== fast) {
        slow = nums[slow];
        fast = nums[nums[fast]];
    }
    // 阶段 2：慢指针回到起点，两个指针同速行进，再次相遇点即为环的入口（重复的数）
    slow = 0;
    while (slow !== fast) {
        slow = nums[slow];
        fast = nums[fast];
    }
    return slow;
};
// @lc code=end



/*
// @lcpr case=start
// [1,3,4,2,2]\n
// @lcpr case=end

// @lcpr case=start
// [3,1,3,4,2]\n
// @lcpr case=end

// @lcpr case=start
// [3,3,3,3,3]\n
// @lcpr case=end

 */

