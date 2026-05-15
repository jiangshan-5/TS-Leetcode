/*
 * @lc app=leetcode.cn id=面试题 02.06 lang=typescript
 * @lcpr version=30403
 *
 * [面试题 02.06] 回文链表
 *
 * https://leetcode.cn/problems/palindrome-linked-list-lcci/description/
 *
 * LCCI
 * Easy (49.49%)
 * Likes:    156
 * Dislikes: 0
 * Total Accepted:    76.6K
 * Total Submissions: 154.7K
 * Testcase Example:  '[1,2]\n[]'
 *
 * 编写一个函数，检查输入的链表是否是回文的。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入： 1->2
 * 输出： false 
 * 
 * 
 * 示例 2：
 * 
 * 输入： 1->2->2->1
 * 输出： true 
 * 
 * 
 * 
 * 
 * 进阶：
 * 你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
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

function isPalindrome(head: ListNode | null): boolean {
    //找到链表中点
    let slow = head, fast = head
    while (fast != null && fast.next != null) {
        fast = fast.next.next
        slow = slow.next
    }
    //反转后半个指针
    let pre: ListNode | null = null
    while (slow != null) {
        const temp = slow.next
        slow.next = pre
        pre = slow
        slow = temp
    }
    //对比两个链表
    while (pre !== null && head !== null) {
        if (pre.val !== head.val) return false
        pre = pre.next
        head = head.next
    }
    return true
};
// @lc code=end



/*
// @lcpr case=start
// [1,2]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

 */

