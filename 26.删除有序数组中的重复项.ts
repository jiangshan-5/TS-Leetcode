/*
 * @lc app=leetcode.cn id=26 lang=typescript
 * @lcpr version=30403
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
//我的解法
// function removeDuplicates(nums: number[]): number {
//     //遍历整个数组，数组既然是有序的，那么后项一定大于等于前项
//     //记录不重复的长度
//     let k = 0
//     //新数组
//     let res: number[] = []
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] != nums[i + 1] && i <= nums.length - 1) {
//             k++
//             res.push(nums[i])
//         }
//         continue
//     }
//     //将新数组赋值给原数组
//     for (let i = 0; i < nums.length; i++) {
//         if (i < res.length) {
//             nums[i] = res[i]
//         } else {
//             nums[i] = -1
//         }

//     }
//     return k
// };

//双指针解法
function removeDuplicates(nums: number[]): number {
    //慢指针记录最后一个不重复的元素，快指针找下一个不重复的元素
    let slow = 0
    for (let fast = 1; fast < nums.length; fast++) {
        if (nums[slow] != nums[fast]) {
            slow++
            nums[slow] = nums[fast]
        }
    }
    return slow + 1
};
// @lc code=end


/*
// @lcpr case=start
// [1,1,2]\n
// @lcpr case=end

// @lcpr case=start
// [0,0,1,1,1,2,2,3,3,4]\n
// @lcpr case=end

 */

