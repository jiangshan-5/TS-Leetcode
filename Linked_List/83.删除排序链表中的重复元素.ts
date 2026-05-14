/*
 * @lc app=leetcode.cn id=83 lang=typescript
 * @lcpr version=30403
 *
 * [83] 删除排序链表中的重复元素
 *
 * https://leetcode.cn/problems/remove-duplicates-from-sorted-list/description/
 *
 * algorithms
 * Easy (54.81%)
 * Likes:    1260
 * Dislikes: 0
 * Total Accepted:    855.4K
 * Total Submissions: 1.6M
 * Testcase Example:  '[1,1,2]\n[1,1,2,3,3]'
 *
 * 给定一个已排序的链表的头 head ， 删除所有重复的元素，使每个元素只出现一次 。返回 已排序的链表 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：head = [1,1,2]
 * 输出：[1,2]
 * 
 * 
 * 示例 2：
 * 
 * 输入：head = [1,1,2,3,3]
 * 输出：[1,2,3]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 链表中节点数目在范围 [0, 300] 内
 * -100 <= Node.val <= 100
 * 题目数据保证链表已经按升序 排列
 * 
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

// function deleteDuplicates(head: ListNode | null): ListNode | null {
//     let slow = head
//     let fast = head
//     //结束条件是快指针走到头
//     while (fast != null) {
//         //如果快指针和慢指针的值相等，说明是重复的
//         if (fast.val == slow.val) {
//             //慢指针的next就指向快指针的下一项
//             slow.next = fast.next
//         } else {
//             //如果不相等，说明不是重复的，慢指针走一步
//             slow = fast
//         }
//         //无论如何，快指针都向前走
//         fast = fast.next
//     }
//     return head
// };

function deleteDuplicates(head: ListNode | null): ListNode | null {

    if (!head) return head
    //改为单指针
    let cur = head
    while (cur != null && cur.next != null) {
        if (cur.val == cur.next.val) {
            cur.next = cur.next.next
        } else {
            cur = cur.next
        }
    }

    return head
};
// @lc code=end



/*
// @lcpr case=start
// [1,1,2]\n
// @lcpr case=end

// @lcpr case=start
// [1,1,2,3,3]\n
// @lcpr case=end

 */

