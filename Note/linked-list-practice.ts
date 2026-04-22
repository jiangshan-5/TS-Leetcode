// 链表节点定义
class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

// ========== 工具函数 ==========

// 从数组创建链表
function createList(arr: number[]): ListNode | null {
    if (arr.length === 0) return null;

    const dummy = new ListNode(0);
    let current = dummy;

    for (const num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }

    return dummy.next;
}

// 打印链表
function printList(head: ListNode | null): void {
    const values: number[] = [];
    let current = head;

    while (current !== null) {
        values.push(current.val);
        current = current.next;
    }

    console.log(values.join(' -> ') + ' -> null');
}

// 将链表转换为数组（方便测试）
function listToArray(head: ListNode | null): number[] {
    const result: number[] = [];
    let current = head;

    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }

    return result;
}

// ========== 基础操作练习 ==========

// 1. 遍历链表
function traverseList(head: ListNode | null): void {
    console.log('\n=== 遍历链表 ===');
    let current = head;
    let index = 0;

    while (current !== null) {
        console.log(`节点 ${index}: ${current.val}`);
        current = current.next;
        index++;
    }
}

// 2. 获取链表长度
function getLength(head: ListNode | null): number {
    let length = 0;
    let current = head;

    while (current !== null) {
        length++;
        current = current.next;
    }

    return length;
}

// 3. 在头部插入节点
function insertAtHead(head: ListNode | null, val: number): ListNode {
    const newNode = new ListNode(val);
    newNode.next = head;
    return newNode;
}

// 4. 在尾部插入节点
function insertAtTail(head: ListNode | null, val: number): ListNode {
    const newNode = new ListNode(val);

    if (head === null) return newNode;

    let current = head;
    while (current.next !== null) {
        current = current.next;
    }
    current.next = newNode;

    return head;
}

// 5. 删除指定值的节点
function deleteNode(head: ListNode | null, val: number): ListNode | null {
    // 处理头节点
    while (head !== null && head.val === val) {
        head = head.next;
    }

    if (head === null) return null;

    let current = head;
    while (current.next !== null) {
        if (current.next.val === val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }

    return head;
}

// 6. 反转链表
function reverseList(head: ListNode | null): ListNode | null {
    let prev = null;
    let current = head;

    while (current !== null) {
        const nextTemp = current.next;
        current.next = prev;
        prev = current;
        current = nextTemp;
    }

    return prev;
}

// 7. 找到中间节点（快慢指针）
function findMiddle(head: ListNode | null): ListNode | null {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow!.next;
        fast = fast.next.next;
    }

    return slow;
}

// 8. 找到倒数第 k 个节点
function findKthFromEnd(head: ListNode | null, k: number): ListNode | null {
    let first = head;
    let second = head;

    // first 先走 k 步
    for (let i = 0; i < k; i++) {
        if (first === null) return null;
        first = first.next;
    }

    // 两个指针一起走
    while (first !== null) {
        first = first.next;
        second = second!.next;
    }

    return second;
}

// 9. 检测链表是否有环
function hasCycle(head: ListNode | null): boolean {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow!.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true;
        }
    }

    return false;
}

// 10. 合并两个有序链表
function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const dummy = new ListNode(0);
    let current = dummy;

    while (l1 !== null && l2 !== null) {
        if (l1.val <= l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }

    // 连接剩余部分
    current.next = l1 !== null ? l1 : l2;

    return dummy.next;
}

// ========== 测试代码 ==========

console.log('========== 链表练习 ==========\n');

// 创建测试链表
const list1 = createList([1, 2, 3, 4, 5]);
console.log('原始链表:');
printList(list1);

// 测试遍历
traverseList(list1);

// 测试长度
console.log('\n链表长度:', getLength(list1));

// 测试头部插入
console.log('\n在头部插入 0:');
const list2 = insertAtHead(list1, 0);
printList(list2);

// 测试尾部插入
console.log('\n在尾部插入 6:');
const list3 = insertAtTail(list2, 6);
printList(list3);

// 测试删除节点
console.log('\n删除值为 3 的节点:');
const list4 = deleteNode(list3, 3);
printList(list4);

// 测试反转链表
console.log('\n反转链表:');
const list5 = reverseList(createList([1, 2, 3, 4, 5]));
printList(list5);

// 测试找中间节点
console.log('\n找中间节点:');
const middle = findMiddle(createList([1, 2, 3, 4, 5]));
console.log('中间节点值:', middle?.val);

// 测试找倒数第 k 个节点
console.log('\n找倒数第 2 个节点:');
const kth = findKthFromEnd(createList([1, 2, 3, 4, 5]), 2);
console.log('倒数第 2 个节点值:', kth?.val);

// 测试合并两个有序链表
console.log('\n合并两个有序链表:');
const listA = createList([1, 3, 5]);
const listB = createList([2, 4, 6]);
console.log('链表 A:');
printList(listA);
console.log('链表 B:');
printList(listB);
const merged = mergeTwoLists(listA, listB);
console.log('合并后:');
printList(merged);

console.log('\n========== 练习完成 ==========');
