# Python3 vs TypeScript 算法语法对照表

对于从 TS 转 Python 的开发者，最需要注意的语法差异总结。

## 1. 基础语法

| 功能 | TypeScript | Python3 |
| :--- | :--- | :--- |
| **空值** | `null` / `undefined` | `None` |
| **布尔值** | `true` / `false` | `True` / `False` |
| **逻辑且** | `&&` | `and` |
| **逻辑或** | `||` | `or` |
| **逻辑非** | `!` | `not` |
| **整数除法** | `Math.floor(5 / 2)` | `5 // 2` |
| **浮点除法** | `5 / 2` | `5 / 2` |

## 2. 链表操作

```python
# TS: let curr: ListNode | null = head;
curr = head

# TS: while (curr !== null) { ... }
while curr:
    # do something
    curr = curr.next

# TS: if (!head) return null;
if not head:
    return None
```

## 3. 常用数据结构

### 集合 (Set)
*   **TS**: `let s = new Set<number>(); s.add(1); s.has(1);`
*   **Python**: `s = set(); s.add(1); 1 in s;`

### 字典 (Map/Dict)
*   **TS**: `let m = new Map<string, number>(); m.set("a", 1); m.get("a");`
*   **Python**: `m = {}; m["a"] = 1; m.get("a");` 或 `m["a"]`

### 列表 (Array/List)
*   **TS**: `arr.push(1); arr.pop(); arr.length;`
*   **Python**: `arr.append(1); arr.pop(); len(arr);`

## 4. 常见坑点
1.  **缩进**：Python 强制缩进，没有大括号 `{}`。
2.  **变量作用域**：Python 没有 `let` 或 `const`，直接赋值即可。
3.  **构造函数**：Python 的构造函数是 `__init__`，第一个参数必须是 `self`。
