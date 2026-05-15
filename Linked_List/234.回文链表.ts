/*
 * @lc app=leetcode.cn id=234 lang=typescript
 * @lcpr version=30403
 *
 * [234] 回文链表
 *
 * https://leetcode.cn/problems/palindrome-linked-list/description/
 *
 * algorithms
 * Easy (58.19%)
 * Likes:    2261
 * Dislikes: 0
 * Total Accepted:    1.3M
 * Total Submissions: 2.2M
 * Testcase Example:  '[1,2,2,1]\n[1,2]'
 *
 * 给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：head = [1,2,2,1]
 * 输出：true
 * 
 * 
 * 示例 2：
 * 
 * 输入：head = [1,2]
 * 输出：false
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 链表中节点数目在范围[1, 10^5] 内
 * 0 <= Node.val <= 9
 * 
 * 
 * 
 * 
 * 进阶：你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
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
    //快慢指针找到这个链表的中点
    let fast = head, slow = head
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next
        slow = slow.next
    }
    //反转链表，fast之后的链表进行反转
    let preNext = null, curr = slow
    while (curr) {
        const tempNext = curr.next
        curr.next = preNext
        preNext = curr
        curr = tempNext
    }
    //反转后的链表以preNext为头节点
    //对比两个链表
    let head1 = head, head2 = preNext
    while (head1 !== null && head2 !== null) {
        if (head1.val !== head2.val) {
            return false
        }
        head1 = head1.next
        head2 = head2.next
    }
    return true

};
// @lc code=end



/*
// @lcpr case=start
// [1,2,2,1]\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n
// @lcpr case=end

 */

