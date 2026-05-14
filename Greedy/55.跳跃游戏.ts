/*
 * @lc app=leetcode.cn id=55 lang=typescript
 * @lcpr version=30403
 *
 * [55] 跳跃游戏
 *
 * https://leetcode.cn/problems/jump-game/description/
 *
 * algorithms
 * Medium (44.88%)
 * Likes:    3262
 * Dislikes: 0
 * Total Accepted:    1.6M
 * Total Submissions: 3.5M
 * Testcase Example:  '[2,3,1,1,4]\n[3,2,1,0,4]'
 *
 * 给你一个非负整数数组 nums ，你最初位于数组的 第一个下标 。数组中的每个元素代表你在该位置可以跳跃的最大长度。
 * 
 * 判断你是否能够到达最后一个下标，如果可以，返回 true ；否则，返回 false 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：nums = [2,3,1,1,4]
 * 输出：true
 * 解释：可以先跳 1 步，从下标 0 到达下标 1, 然后再从下标 1 跳 3 步到达最后一个下标。
 * 
 * 
 * 示例 2：
 * 
 * 输入：nums = [3,2,1,0,4]
 * 输出：false
 * 解释：无论怎样，总会到达下标为 3 的位置。但该下标的最大跳跃长度是 0 ， 所以永远不可能到达最后一个下标。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= nums.length <= 10^4
 * 0 <= nums[i] <= 10^5
 * 
 * 
 */

// @lc code=start
function canJump(nums: number[]): boolean {
    let maxReach = 0; // 记录目前最远能跳到的下标

    for (let i = 0; i < nums.length; i++) {
        // 如果当前位置已经超过了之前能跳到的最远位置，说明无法到达这里
        if (i > maxReach) {
            return false;
        }

        // 更新最远能到达的位置：当前位置 + 当前能跳的最大长度
        maxReach = Math.max(maxReach, i + nums[i]);

        // 如果最远位置已经覆盖了终点，直接成功
        if (maxReach >= nums.length - 1) {
            return true;
        }
    }
    return false
};
// @lc code=end


/*
// @lcpr case=start
// [2,3,1,1,4]\n
// @lcpr case=end

// @lcpr case=start
// [3,2,1,0,4]\n
// @lcpr case=end

 */

