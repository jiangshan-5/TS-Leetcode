/*
 * @lc app=leetcode.cn id=21 lang=typescript
 * @lcpr version=30403
 *
 * [21] 合并两个有序链表
 *
 * https://leetcode.cn/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (68.17%)
 * Likes:    4041
 * Dislikes: 0
 * Total Accepted:    2.4M
 * Total Submissions: 3.6M
 * Testcase Example:  '[1,2,4]\n[1,3,4]\n[]\n[]\n[]\n[0]'
 *
 * 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：l1 = [1,2,4], l2 = [1,3,4]
 * 输出：[1,1,2,3,4,4]
 * 
 * 
 * 示例 2：
 * 
 * 输入：l1 = [], l2 = []
 * 输出：[]
 * 
 * 
 * 示例 3：
 * 
 * 输入：l1 = [], l2 = [0]
 * 输出：[0]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 两个链表的节点数目范围是 [0, 50]
 * -100 <= Node.val <= 100
 * l1 和 l2 均按 非递减顺序 排列
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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    const dummy = new ListNode(0)
    let cur = dummy
    while (list1 != null && list2 != null) {
        //比较当前list1和2的值，小的加到头结点
        if (list1.val < list2.val) {
            //更新新链表头结点
            cur.next = list1
            //list1的头结点被取走了，所以最新的头结点应该是下一项
            list1 = list1.next
        } else {
            cur.next = list2
            list2 = list2.next
        }
        //无论哪种情况，都需要将头指针往后移动一位
        cur = cur.next
    }
    //如果list1不为空，说明list2到头了，将list1的剩余部分接到新链表后面
    if (list1 != null) {
        cur.next = list1
    }
    //如果list2不为空，说明list1到头了，将list2的剩余部分接到新链表后面
    if (list2 != null) {
        cur.next = list2
    }
    //返回新链表的头结点（dummy.next）
    return dummy.next
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,4]\n[1,3,4]\n
// @lcpr case=end

// @lcpr case=start
// []\n[]\n
// @lcpr case=end

// @lcpr case=start
// []\n[0]\n
// @lcpr case=end

 */

