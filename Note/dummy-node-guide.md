# 哨兵节点 (Dummy Node) 专项指南

## 1. 核心定义
**哨兵节点 (Dummy Node)** 是人为在原链表头节点 (`head`) 前面添加的一个辅助节点。它通常不存储有效数据，仅作为逻辑上的占位符。

## 2. 为什么要用它？
处理链表时，最繁琐的逻辑往往在于：
- **头节点的操作**：删除头节点、在头节点前插入、或者原链表为空。
- **逻辑的一致性**：没有哨兵时，头节点没有“前任”，你需要写大量的 `if (head == ...)`。

**使用了哨兵节点后，所有的节点（包括原来的头节点）都有了前任。**

## 3. 使用模板
```typescript
function solution(head: ListNode | null): ListNode | null {
    // 1. 创建哨兵
    const dummy = new ListNode(0);
    dummy.next = head;

    // 2. 使用临时指针进行操作
    let cur = dummy;
    while (cur.next !== null) {
        if (/* 满足某种条件 */) {
            cur.next = cur.next.next; // 删除操作
        } else {
            cur = cur.next; // 推进操作
        }
    }

    // 3. 永远返回 dummy.next
    return dummy.next;
}
```

## 4. 适用场景建议
- **删除节点** (LC 203, LC 19)
- **合并链表** (LC 21)
- **两两交换节点** (LC 24)
- **链表分区** (LC 86)

---

## 5. ⚠️ 注意点：什么时候不该移动 `cur`？
在执行删除操作 `cur.next = cur.next.next` 后，**千万不要**立刻执行 `cur = cur.next`。
**原因**：因为 `cur.next` 已经变成了一个全新的节点，你必须在下一轮循环里原地检查这个新节点是否也满足删除条件。
