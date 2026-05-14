/*
 * @lc app=leetcode.cn id=219 lang=typescript
 * @lcpr version=30403
 *
 * [219] 存在重复元素 II
 *
 * https://leetcode.cn/problems/contains-duplicate-ii/description/
 *
 * algorithms
 * Easy (50.93%)
 * Likes:    867
 * Dislikes: 0
 * Total Accepted:    454.3K
 * Total Submissions: 891.1K
 * Testcase Example:  '[1,2,3,1]\n3\n[1,0,1,1]\n1\n[1,2,3,1,2,3]\n2'
 *
 * 给你一个整数数组 nums 和一个整数 k ，判断数组中是否存在两个 不同的索引 i 和 j ，满足 nums[i] == nums[j] 且
 * abs(i - j) <= k 。如果存在，返回 true ；否则，返回 false 。
 *
 *
 *
 * 示例 1：
 *
 * 输入：nums = [1,2,3,1], k = 3
 * 输出：true
 *
 * 示例 2：
 *
 * 输入：nums = [1,0,1,1], k = 1
 * 输出：true
 *
 * 示例 3：
 *
 * 输入：nums = [1,2,3,1,2,3], k = 2
 * 输出：false
 *
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= nums.length <= 10^5
 * -10^9 <= nums[i] <= 10^9
 * 0 <= k <= 10^5
 *
 *
 */

// @lc code=start
function containsNearbyDuplicate(nums: number[], k: number): boolean {
    // 维护一个大小最大为 k 的哈希表 (滑动窗口)
    const set = new Set<number>();

    for (let i = 0; i < nums.length; i++) {
        // 1. 检查当前窗口里是否有重复数字
        if (set.has(nums[i])) {
            return true;
        }

        // 2. 将当前数字存入窗口
        set.add(nums[i]);

        // 3. 维护窗口大小：如果 set 的大小超过了 k
        // 说明最左边的那个数字已经超出距离限制了，将其移除
        if (set.size > k) {
            set.delete(nums[i - k]);
        }
    }

    return false;
};
// function containsNearbyDuplicate(nums: number[], k: number): boolean {
//     //哈希表
//     const map = new Map<number, number>()
//     for (let i = 0; i < nums.length; i++) {
//         //存在key且和当前索引绝对值小于等于k即是符合条件返回true
//         if (map.has(nums[i]) && Math.abs(i - map.get(nums[i])!) <= k) {
//             return true
//         }
//         //将当前索引存入map
//         map.set(nums[i], i)
//     }
//     return false
// };
// @lc code=end



/*
// @lcpr case=start
// [1,2,3,1]\n3\n
// @lcpr case=end

// @lcpr case=start
// [1,0,1,1]\n1\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,1,2,3]\n2\n
// @lcpr case=end

 */

