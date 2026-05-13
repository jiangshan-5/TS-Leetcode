/*
 * @lc app=leetcode.cn id=350 lang=typescript
 * @lcpr version=30403
 *
 * [350] 两个数组的交集 II
 *
 * https://leetcode.cn/problems/intersection-of-two-arrays-ii/description/
 *
 * algorithms
 * Easy (59.00%)
 * Likes:    1145
 * Dislikes: 0
 * Total Accepted:    582K
 * Total Submissions: 986.3K
 * Testcase Example:  '[1,2,2,1]\n[2,2]\n[4,9,5]\n[9,4,9,8,4]'
 *
 * 给你两个整数数组 nums1 和 nums2
 * ，请你以数组形式返回两数组的交集。返回结果中每个元素出现的次数，应与元素在两个数组中都出现的次数一致（如果出现次数不一致，则考虑取较小值）。可以不考虑输出结果的顺序。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：nums1 = [1,2,2,1], nums2 = [2,2]
 * 输出：[2,2]
 * 
 * 
 * 示例 2:
 * 
 * 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * 输出：[4,9]
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
 * 
 * 
 * 进阶：
 * 
 * 
 * 如果给定的数组已经排好序呢？你将如何优化你的算法？
 * 如果 nums1 的大小比 nums2 小，哪种方法更优？
 * 如果 nums2 的元素存储在磁盘上，内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？
 * 
 * 
 */

// @lc code=start
/**
 * 解法一：单哈希表优化 (时间最优解 O(n+m))
 */
function intersect(nums1: number[], nums2: number[]): number[] {
    // 性能优化：优先遍历短数组，节省哈希表空间
    if (nums1.length > nums2.length) {
        return intersect(nums2, nums1);
    }

    const map = new Map<number, number>();
    for (const num of nums1) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    const result: number[] = [];
    for (const num of nums2) {
        const count = map.get(num);
        if (count && count > 0) {
            result.push(num);
            map.set(num, count - 1); // 消耗一次计数
        }
    }
    return result;
}

/*
// 解法二：你原始的双哈希表解法 (逻辑正确，稍显冗余)
function intersect(nums1: number[], nums2: number[]): number[] {
    let map = new Map<number, number>()
    let map2 = new Map<number, number>()
    let result: number[] = []

    for (let i = 0; i < nums1.length; i++) {
        if (map.has(nums1[i])) {
            map.set(nums1[i], map.get(nums1[i])! + 1)
        } else {
            map.set(nums1[i], 1)
        }
    }
    for (let i = 0; i < nums2.length; i++) {
        if (map2.has(nums2[i])) {
            map2.set(nums2[i], map2.get(nums2[i])! + 1)
        } else {
            map2.set(nums2[i], 1)
        }
    }

    map.forEach((value, key) => {
        if (map2.has(key)) {
            let count = Math.min(value, map2.get(key)!)
            for (let i = 0; i < count; i++) {
                result.push(key)
            }
        }
    })
    return result
};
*/

/*
// 解法三：双指针 (适用于已排序数组，空间最优解 O(1))
function intersect(nums1: number[], nums2: number[]): number[] {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    let i = 0, j = 0;
    const result: number[] = [];
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] === nums2[j]) {
            result.push(nums1[i]);
            i++; j++;
        } else if (nums1[i] < nums2[j]) {
            i++;
        } else {
            j++;
        }
    }
    return result;
}
*/
// @lc code=end



/*
// @lcpr case=start
// [1,2,2,1]\n[2,2]\n
// @lcpr case=end

// @lcpr case=start
// [4,9,5]\n[9,4,9,8,4]\n
// @lcpr case=end

 */

