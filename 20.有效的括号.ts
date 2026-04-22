// LeetCode 20. 有效的括号
// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

function isValid(s: string): boolean {
    // 奇数长度直接返回 false
    if (s.length % 2 === 1) {
        return false;
    }
    
    const stack: string[] = [];
    const map: Record<string, string> = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    for (const char of s) {
        // 如果是右括号
        if (char in map) {
            // 栈为空或栈顶不匹配
            if (stack.length === 0 || stack[stack.length - 1] !== map[char]) {
                return false;
            }
            stack.pop();
        } else {
            // 左括号入栈
            stack.push(char);
        }
    }
    
    // 栈为空说明全部匹配
    return stack.length === 0;
}

// 测试用例
console.log(isValid("()"));           // true
console.log(isValid("()[]{}"));       // true
console.log(isValid("(]"));           // false
console.log(isValid("([)]"));         // false
console.log(isValid("{[]}"));         // true
console.log(isValid("{{{{{(((())))}")); // false
