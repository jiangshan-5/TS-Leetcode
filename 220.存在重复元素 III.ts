/*
 * @lc app=leetcode.cn id=220 lang=typescript
 * @lcpr version=30403
 *
 * [220] 存在重复元素 III
 *
 * https://leetcode.cn/problems/contains-duplicate-iii/description/
 *
 * algorithms
 * Hard (31.79%)
 * Likes:    788
 * Dislikes: 0
 * Total Accepted:    117.1K
 * Total Submissions: 367.9K
 * Testcase Example:  '[1,2,3,1]\n3\n0\n[1,5,9,1,5,9]\n2\n3'
 *
 * 给你一个整数数组 nums 和两个整数 indexDiff 和 valueDiff 。
 * 
 * 找出满足下述条件的下标对 (i, j)：
 * 
 * 
 * i != j,
 * abs(i - j) <= indexDiff
 * abs(nums[i] - nums[j]) <= valueDiff
 * 
 * 
 * 如果存在，返回 true ；否则，返回 false 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：nums = [1,2,3,1], indexDiff = 3, valueDiff = 0
 * 输出：true
 * 解释：可以找出 (i, j) = (0, 3) 。
 * 满足下述 3 个条件：
 * i != j --> 0 != 3
 * abs(i - j) <= indexDiff --> abs(0 - 3) <= 3
 * abs(nums[i] - nums[j]) <= valueDiff --> abs(1 - 1) <= 0
 * 
 * 
 * 示例 2：
 * 
 * 输入：nums = [1,5,9,1,5,9], indexDiff = 2, valueDiff = 3
 * 输出：false
 * 解释：尝试所有可能的下标对 (i, j) ，均无法满足这 3 个条件，因此返回 false 。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 2 <= nums.length <= 10^5
 * -10^9 <= nums[i] <= 10^9
 * 1 <= indexDiff <= nums.length
 * 0 <= valueDiff <= 10^9
 * 
 * 
 */

// @lc code=start
function containsNearbyAlmostDuplicate(nums: number[], indexDiff: number, valueDiff: number): boolean {
    // 桶的大小设为 valueDiff + 1
    // 这样同一个桶内的任意两个数，其差值一定 <= valueDiff
    const width = valueDiff + 1;
    const buckets = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        // 计算当前数字所属的桶 ID
        const id = Math.floor(num / width);

        // 1. 检查当前桶：如果桶里已经有数了，说明找到了符合条件的数
        if (buckets.has(id)) {
            return true;
        }

        // 2. 检查相邻的左边桶：如果差值 <= valueDiff，也符合条件
        if (buckets.has(id - 1) && Math.abs(num - buckets.get(id - 1)!) <= valueDiff) {
            return true;
        }

        // 3. 检查相邻的右边桶：如果差值 <= valueDiff，也符合条件
        if (buckets.has(id + 1) && Math.abs(num - buckets.get(id + 1)!) <= valueDiff) {
            return true;
        }

        // 将当前数放入对应的桶
        buckets.set(id, num);

        // 4. 维护滑动窗口：保证桶里只存最近 indexDiff 个索引范围内的数
        if (i >= indexDiff) {
            // 移除最左边那个数对应的桶
            buckets.delete(Math.floor(nums[i - indexDiff] / width));
        }
    }

    return false;
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3,1]\n3\n0\n
// @lcpr case=end

// @lcpr case=start
// [1,5,9,1,5,9]\n2\n3\n
// @lcpr case=end

 */

