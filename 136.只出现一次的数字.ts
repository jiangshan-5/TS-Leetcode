/*
 * @lc app=leetcode.cn id=136 lang=typescript
 * @lcpr version=30403
 *
 * [136] 只出现一次的数字
 *
 * https://leetcode.cn/problems/single-number/description/
 *
 * algorithms
 * Easy (76.64%)
 * Likes:    3478
 * Dislikes: 0
 * Total Accepted:    1.5M
 * Total Submissions: 1.9M
 * Testcase Example:  '[2,2,1]\n[4,1,2,1,2]\n[1]'
 *
 * 给你一个 非空 整数数组 nums ，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
 * 
 * 你必须设计并实现线性时间复杂度的算法来解决此问题，且该算法只使用常量额外空间。
 * 
 * 
 * 
 * 
 * 
 * 示例 1 ：
 * 
 * 
 * 输入：nums = [2,2,1]
 * 
 * 输出：1
 * 
 * 
 * 示例 2 ：
 * 
 * 
 * 输入：nums = [4,1,2,1,2]
 * 
 * 输出：4
 * 
 * 
 * 示例 3 ：
 * 
 * 
 * 输入：nums = [1]
 * 
 * 输出：1
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= nums.length <= 3 * 10^4
 * -3 * 10^4 <= nums[i] <= 3 * 10^4
 * 除了某个元素只出现一次以外，其余每个元素均出现两次。
 * 
 * 
 * 
 * 
 */

// @lc code=start
//异或解法,相同数字异或等于0，任何数字异或0等于数字本身，所以相同的数字异或后为0，最后只剩下那个只出现一次的数字
function singleNumber(nums: number[]): number {
    let res = 0
    for (const n of nums) {
        res = res ^ n
    }
    return res
};
// @lc code=end



/*
// @lcpr case=start
// [2,2,1]\n
// @lcpr case=end

// @lcpr case=start
// [4,1,2,1,2]\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

 */

