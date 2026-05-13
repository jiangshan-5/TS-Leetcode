/*
 * @lc app=leetcode.cn id=349 lang=typescript
 * @lcpr version=30403
 *
 * [349] 两个数组的交集
 *
 * https://leetcode.cn/problems/intersection-of-two-arrays/description/
 *
 * algorithms
 * Easy (75.13%)
 * Likes:    1026
 * Dislikes: 0
 * Total Accepted:    763.6K
 * Total Submissions: 1M
 * Testcase Example:  '[1,2,2,1]\n[2,2]\n[4,9,5]\n[9,4,9,8,4]'
 *
 * 给定两个数组 nums1 和 nums2 ，返回 它们的 交集 。输出结果中的每个元素一定是 唯一 的。我们可以 不考虑输出结果的顺序 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：nums1 = [1,2,2,1], nums2 = [2,2]
 * 输出：[2]
 * 
 * 
 * 示例 2：
 * 
 * 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * 输出：[9,4]
 * 解释：[4,9] 也是可通过的
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= nums1.length, nums2.length <= 1000
 * 0 <= nums1[i], nums2[i] <= 1000
 * 
 * 
 */

// @lc code=start
function intersection(nums1: number[], nums2: number[]): number[] {
    //利用哈希表唯一性，避免重复遍历数组
    let set = new Set(nums1);
    let result = new Set<number>()
    for (let i = 0; i < nums2.length; i++) {
        if (set.has(nums2[i])) {
            result.add(nums2[i]);
        }
    }
    return Array.from(result);
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,2,1]\n[2,2]\n
// @lcpr case=end

// @lcpr case=start
// [4,9,5]\n[9,4,9,8,4]\n
// @lcpr case=end

 */

