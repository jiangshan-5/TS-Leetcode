/*
 * @lc app=leetcode.cn id=412 lang=typescript
 * @lcpr version=30403
 *
 * [412] Fizz Buzz
 *
 * https://leetcode.cn/problems/fizz-buzz/description/
 *
 * algorithms
 * Easy (70.15%)
 * Likes:    363
 * Dislikes: 0
 * Total Accepted:    242.7K
 * Total Submissions: 346.1K
 * Testcase Example:  '3\n5\n15'
 *
 * 给你一个整数 n ，返回一个字符串数组 answer（下标从 1 开始），其中：
 * 
 * 
 * answer[i] == "FizzBuzz" 如果 i 同时是 3 和 5 的倍数。
 * answer[i] == "Fizz" 如果 i 是 3 的倍数。
 * answer[i] == "Buzz" 如果 i 是 5 的倍数。
 * answer[i] == i （以字符串形式）如果上述条件全不满足。
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：n = 3
 * 输出：["1","2","Fizz"]
 * 
 * 
 * 示例 2：
 * 
 * 输入：n = 5
 * 输出：["1","2","Fizz","4","Buzz"]
 * 
 * 
 * 示例 3：
 * 
 * 输入：n = 15
 * 
 * 输出：["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= n <= 10^4
 * 
 * 
 */

//我的解法
// @lc code=start
// function fizzBuzz(n: number): string[] {
//     let answer: string[] = []
//     for (let i = 1; i <= n; i++) {
//         if (i % 3 == 0 && i % 5 == 0) {
//             answer[i - 1] = "FizzBuzz"
//         } else if (i % 3 == 0) {
//             answer[i - 1] = "Fizz"
//         } else if (i % 5 == 0) {
//             answer[i - 1] = "Buzz"
//         } else {
//             answer[i - 1] = i.toString()
//         }
//     }
//     return answer
// };

function fizzBuzz(n: number): string[] {
    let answer: string[] = []
    for (let i = 1; i <= n; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            answer[i - 1] = "FizzBuzz"
        } else if (i % 3 == 0) {
            answer[i - 1] = "Fizz"
        } else if (i % 5 == 0) {
            answer[i - 1] = "Buzz"
        } else {
            answer[i - 1] = i.toString()
        }
    }
    return answer
};
// @lc code=end



/*
// @lcpr case=start
// 3\n
// @lcpr case=end

// @lcpr case=start
// 5\n
// @lcpr case=end

// @lcpr case=start
// 15\n
// @lcpr case=end

 */

