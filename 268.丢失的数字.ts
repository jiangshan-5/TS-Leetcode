/*
 * @lc app=leetcode.cn id=268 lang=typescript
 * @lcpr version=30403
 *
 * [268] 丢失的数字
 *
 * https://leetcode.cn/problems/missing-number/description/
 *
 * algorithms
 * Easy (68.14%)
 * Likes:    918
 * Dislikes: 0
 * Total Accepted:    417.9K
 * Total Submissions: 613.2K
 * Testcase Example:  '[3,0,1]\n[0,1]\n[9,6,4,2,3,5,7,0,1]'
 *
 * 给定一个包含 [0, n] 中 n 个数的数组 nums ，找出 [0, n] 这个范围内没有出现在数组中的那个数。
 * 
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [3,0,1]
 * 
 * 输出：2
 * 
 * 解释：n = 3，因为有 3 个数字，所以所有的数字都在范围 [0,3] 内。2 是丢失的数字，因为它没有出现在 nums 中。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [0,1]
 * 
 * 输出：2
 * 
 * 解释：n = 2，因为有 2 个数字，所以所有的数字都在范围 [0,2] 内。2 是丢失的数字，因为它没有出现在 nums 中。
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [9,6,4,2,3,5,7,0,1]
 * 
 * 输出：8
 * 
 * 解释：n = 9，因为有 9 个数字，所以所有的数字都在范围 [0,9] 内。8 是丢失的数字，因为它没有出现在 nums 中。
 * 
 * 
 * 提示：
 * 
 * 
 * n == nums.length
 * 1 <= n <= 10^4
 * 0 <= nums[i] <= n
 * nums 中的所有数字都 独一无二
 * 
 * 
 * 
 * 
 * 进阶：你能否实现线性时间复杂度、仅使用额外常数空间的算法解决此问题?
 * 
 */

// @lc code=start

//暴力循环
// function missingNumber(nums: number[]): number {
//     //排序，遍历，数组汇总不存在的即返回，循环次数和数组长度相关
//     nums.sort((a, b) => a - b)
//     for (let i = 0; i <= nums.length; i++) {
//         if (nums[i] !== i) {
//             return i
//         }
//     }
//     return 0
// };


//理论和和实际和的差值
// function missingNumber(nums: number[]): number {
//     //数学等差求和
//     let n = nums.length
//     //理论和
//     let expectedSum = n * (n + 1) / 2
//     //实际和
//     let actualSum = nums.reduce((a, b) => a + b, 0)
//     return expectedSum - actualSum
// };

//位运算
function missingNumber(nums: number[]): number {
    let res = nums.length; // 先初始化为 n
    for (let i = 0; i < nums.length; i++) {
        // 将索引 i 和 数组元素 nums[i] 进行异或
        res ^= i ^ nums[i];
    }
    return res;
};
// @lc code=end



/*
// @lcpr case=start
// [3,0,1]\n
// @lcpr case=end

// @lcpr case=start
// [0,1]\n
// @lcpr case=end

// @lcpr case=start
// [9,6,4,2,3,5,7,0,1]\n
// @lcpr case=end

 */

