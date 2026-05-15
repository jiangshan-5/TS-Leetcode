/*
 * @lc app=leetcode.cn id=面试题 02.01 lang=typescript
 * @lcpr version=30403
 *
 * [面试题 02.01] 移除重复节点
 *
 * https://leetcode.cn/problems/remove-duplicate-node-lcci/description/
 *
 * LCCI
 * Easy (66.42%)
 * Likes:    206
 * Dislikes: 0
 * Total Accepted:    113.7K
 * Total Submissions: 171.1K
 * Testcase Example:  '[1, 2, 3, 3, 2, 1]\n[1, 1, 1, 1, 2]'
 *
 * 编写代码，移除未排序链表中的重复节点。保留最开始出现的节点。
 * 
 * 示例1：
 * 
 * ⁠输入：[1, 2, 3, 3, 2, 1]
 * ⁠输出：[1, 2, 3]
 * 
 * 
 * 示例2：
 * 
 * ⁠输入：[1, 1, 1, 1, 2]
 * ⁠输出：[1, 2]
 * 
 * 
 * 提示：
 * 
 * 
 * 链表长度在[0, 20000]范围内。
 * 链表元素在[0, 20000]范围内。
 * 
 * 
 * 进阶：
 * 
 * 如果不得使用临时缓冲区，该怎么解决？
 * 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeDuplicateNodes(head: ListNode | null): ListNode | null {
    if (!head) return head
    let set = new Set<number>()
    let curr: ListNode | null = head
    let pre: ListNode | null = null
    while (curr) {
        if (set.has(curr.val)) {
            pre.next = curr.next
        } else {
            set.add(curr.val)
            pre = curr
        }
        curr = curr.next
    }
    return head
};
// @lc code=end



/*
// @lcpr case=start
// [1, 2, 3, 3, 2, 1]\n
// @lcpr case=end

// @lcpr case=start
// [1, 1, 1, 1, 2]\n
// @lcpr case=end

 */

