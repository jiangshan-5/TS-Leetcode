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

---

## 6. ⚠️ 防坑铁律：如何彻底避免“哨兵越权”？

**哨兵越权**是指在代码逻辑中，不小心让哨兵节点的值（通常初始化为 `0`）参与了链表数据的比对和逻辑操作，从而导致报错或逻辑错误。

要彻底杜绝此问题，请牢记以下**两条核心开发准则**：

### 准则一：单指针“探路法” (最安全、最推荐 🌟)
*   **核心思路**：指针停在当前节点，只去探查**下一个节点**的属性（`cur.next.val`），绝不比对当前节点的值。
*   **写法示范**：
    ```typescript
    let cur = dummy;
    while (cur.next) {
        if (cur.next.val === val) { // 检查的是下一个节点，它一定是真实节点！
            cur.next = cur.next.next;
        } else {
            cur = cur.next;
        }
    }
    ```
*   **为什么安全**：`cur` 初始指向 `dummy`，但比对的却是 `cur.next.val`（即真正的首个节点 `head.val`）。哨兵自己的值永远被跳过，不会参与逻辑比对。

### 准则二：双指针“错位初始化”
*   **核心思路**：如果你的算法必须使用双指针（`curr` 和 `prev`），那么**起跑位置必须错开**：让 `curr` 从真实节点 `head` 开始判断，而 `prev` 从哨兵节点 `dummy` 开始紧随其后。
*   **写法示范**：
    ```typescript
    let dummy = new ListNode(0, head);
    let curr = head;       // 核心：只检查真实节点
    let prev = dummy;      // 核心：起跑点在哨兵，确保不为 null
    while (curr) {
        if (curr.val === val) {
            prev.next = curr.next;
            break;
        }
        prev = curr;
        curr = curr.next;
    }
    ```
*   **为什么安全**：
    1. `curr` 起步就是真实的 `head`，从而彻底把哨兵的值隔离在判断逻辑之外。
    2. `prev` 起步是 `dummy`，所以当要删除第一个节点（`head`）时，`prev` 已经是安全的哨兵节点，拥有充足的指针地址去链接下一个节点，不会出现 `null` 指针异常。

