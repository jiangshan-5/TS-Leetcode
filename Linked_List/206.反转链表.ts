/*
 * @lc app=leetcode.cn id=206 lang=typescript
 * @lcpr version=30403
 *
 * [206] 反转链表
 *
 * https://leetcode.cn/problems/reverse-linked-list/description/
 *
 * algorithms
 * Easy (76.41%)
 * Likes:    4126
 * Dislikes: 0
 * Total Accepted:    2.9M
 * Total Submissions: 3.7M
 * Testcase Example:  '[1,2,3,4,5]\n[1,2]\n[]'
 *
 * 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：head = [1,2,3,4,5]
 * 输出：[5,4,3,2,1]
 * 
 * 
 * 示例 2：
 * 
 * 输入：head = [1,2]
 * 输出：[2,1]
 * 
 * 
 * 示例 3：
 * 
 * 输入：head = []
 * 输出：[]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 链表中节点的数目范围是 [0, 5000]
 * -5000 <= Node.val <= 5000
 * 
 * 
 * 
 * 
 * 进阶：链表可以选用迭代或递归方式完成反转。你能否用两种方法解决这道题？
 * 
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
/**
 * 206. 反转链表
 * 
 * 核心思想：迭代法 (双指针)
 * 物理比喻：在铁轨上跑，先把下家存好，再把当前车头调转方向指向前任。
 */

// function reverseList(head: ListNode | null): ListNode | null {
//     // 1. 初始化两个指针
//     // prev：指向当前节点的前一个（最开始头节点的前面是 null）
//     let prev: ListNode | null = null;
//     // curr：指向当前正在处理的节点
//     let curr: ListNode | null = head;

//     while (curr !== null) {
//         // 2. 核心步骤：【存、断、移】

//         // 【存】：在断开连接前，必须先记住“下家”是谁
//         const nextTemp = curr.next;

//         // 【反转】：让当前的节点不再指向后面，而是反过来指向“前任”
//         curr.next = prev;

//         // 【移】：大家整体向后挪一个身位，为下一次反转做准备
//         // 先让 prev 挪到当前位置
//         prev = curr;
//         // 再让 curr 挪到刚才存好的下家位置
//         curr = nextTemp;
//     }

//     // 3. 返回结果
//     // 当 curr 跑到 null 时，prev 正好停在原链表的最后一个节点（即新链表的头）
//     return prev;
// };

function reverseList(head: ListNode | null): ListNode | null {
    let p: ListNode | null = null
    let c: ListNode | null = head
    while (c != null) {
        const nexttemp = c.next
        c.next = p
        p = c
        c = nexttemp
    }
    return p
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3,4,5]\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

 */

