#
# @lc app=leetcode.cn id=面试题 02.01 lang=python3
# @lcpr version=30403
#
# [面试题 02.01] 移除重复节点
#
# https://leetcode.cn/problems/remove-duplicate-node-lcci/description/
#
# LCCI
# Easy (66.42%)
# Likes:    206
# Dislikes: 0
# Total Accepted:    113.7K
# Total Submissions: 171.1K
# Testcase Example:  '[1, 2, 3, 3, 2, 1]\n[1, 1, 1, 1, 2]'
#
# 编写代码，移除未排序链表中的重复节点。保留最开始出现的节点。
# 
# 示例1：
# 
# ⁠输入：[1, 2, 3, 3, 2, 1]
# ⁠输出：[1, 2, 3]
# 
# 
# 示例2：
# 
# ⁠输入：[1, 1, 1, 1, 2]
# ⁠输出：[1, 2]
# 
# 
# 提示：
# 
# 
# 链表长度在[0, 20000]范围内。
# 链表元素在[0, 20000]范围内。
# 
# 
# 进阶：
# 
# 如果不得使用临时缓冲区，该怎么解决？
# 
#

# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeDuplicateNodes(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head: return head
        s = set()
        curr = head
        pre = None
        while curr:
            if curr.val not in s:
                s.add(curr.val)
                pre = curr
            else:
                pre.next = curr.next
            curr = curr.next
        return head 

# @lc code=end



#
# @lcpr case=start
# [1, 2, 3, 3, 2, 1]\n
# @lcpr case=end

# @lcpr case=start
# [1, 1, 1, 1, 2]\n
# @lcpr case=end

#

