/*
 * @lc app=leetcode.cn id=876 lang=typescript
 * @lcpr version=30403
 *
 * [876] 链表的中间结点
 *
 * https://leetcode.cn/problems/middle-of-the-linked-list/description/
 *
 * algorithms
 * Easy (72.77%)
 * Likes:    1125
 * Dislikes: 0
 * Total Accepted:    559.6K
 * Total Submissions: 768.7K
 * Testcase Example:  '[1,2,3,4,5]\n[1,2,3,4,5,6]'
 *
 * 给你单链表的头结点 head ，请你找出并返回链表的中间结点。
 * 
 * 如果有两个中间结点，则返回第二个中间结点。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：head = [1,2,3,4,5]
 * 输出：[3,4,5]
 * 解释：链表只有一个中间结点，值为 3 。
 * 
 * 
 * 示例 2：
 * 
 * 输入：head = [1,2,3,4,5,6]
 * 输出：[4,5,6]
 * 解释：该链表有两个中间结点，值分别为 3 和 4 ，返回第二个结点。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 链表的结点数范围是 [1, 100]
 * 1 <= Node.val <= 100
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

function middleNode(head: ListNode | null): ListNode | null {
    let slow = head
    let fast = head
    //奇数时，fast会走到末位，但是此时fast.next为null，循环结束，slow指向中间节点
    //偶数时，fast会走到null，此时fast.next为null，循环结束，slow指向中间节点
    //判断顺序也不能反，判断fast为null时会直接断后后续的fast。next判断
    while (fast != null && fast.next != null) {
        slow = slow!.next
        fast = fast!.next.next
    }
    return slow
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3,4,5]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,4,5,6]\n
// @lcpr case=end

 */

