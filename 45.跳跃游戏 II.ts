/*
 * @lc app=leetcode.cn id=45 lang=typescript
 * @lcpr version=30403
 *
 * [45] 跳跃游戏 II
 *
 * https://leetcode.cn/problems/jump-game-ii/description/
 *
 * algorithms
 * Medium (45.73%)
 * Likes:    3048
 * Dislikes: 0
 * Total Accepted:    1.3M
 * Total Submissions: 2.7M
 * Testcase Example:  '[2,3,1,1,4]\n[2,3,0,1,4]'
 *
 * 给定一个长度为 n 的 0 索引整数数组 nums。初始位置在下标 0。
 * 
 * 每个元素 nums[i] 表示从索引 i 向后跳转的最大长度。换句话说，如果你在索引 i 处，你可以跳转到任意 (i + j) 处：
 * 
 * 
 * 0 <= j <= nums[i] 且
 * i + j < n
 * 
 * 
 * 返回到达 n - 1 的最小跳跃次数。测试用例保证可以到达 n - 1。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 输入: nums = [2,3,1,1,4]
 * 输出: 2
 * 解释: 跳到最后一个位置的最小跳跃数是 2。
 * 从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。
 * 
 * 
 * 示例 2:
 * 
 * 输入: nums = [2,3,0,1,4]
 * 输出: 2
 * 
 * 
 * 
 * 
 * 提示:
 * 
 * 
 * 1 <= nums.length <= 10^4
 * 0 <= nums[i] <= 1000
 * 题目保证可以到达 n - 1
 * 
 * 
 */

// @lc code=start
function jump(nums: number[]): number {
    let step = 1
    let maxReach = nums[0]
    let temp = 0
    for (let i = 0; i < nums.length; i++) {
        if (i > maxReach) {
            return 0
        }
        //记录此时的最大跳跃距离
        maxReach = i + nums[i]
        //遍历从 i 到 maxReach 这个区间
        for (let j = i; j <= i + nums[i]; j++) {
            //找这个区间最大的跳跃距离
            temp = Math.max(temp, nums[j] + j)
        }
        maxReach += temp
        step++
        if (maxReach >= nums.length - 1) {
            return step
        }
    }
    return 0
};
// @lc code=end



/*
// @lcpr case=start
// [2,3,1,1,4]\n
// @lcpr case=end

// @lcpr case=start
// [2,3,0,1,4]\n
// @lcpr case=end

 */

