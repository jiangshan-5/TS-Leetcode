// function romanToInt(s: string): number {
//     let num = 0
//     //判断是不是I X C
//     for (let i = 0; i < s.length; i++) {
//         switch (s[i]) {
//             case 'C':
//                 num = s[i + 1] == 'M' ? num + 900 : s[i + 1] == 'D' ? num + 400 : num + 100
//                 if (s[i + 1] == 'M' || s[i + 1] == 'D') i++
//                 break
//             case 'X':
//                 num = s[i + 1] == 'C' ? num + 90 : s[i + 1] == 'L' ? num + 40 : num + 10
//                 if (s[i + 1] == 'C' || s[i + 1] == 'L') i++
//                 break
//             case 'I':
//                 num = s[i + 1] == 'X' ? num + 9 : s[i + 1] == 'V' ? num + 4 : num + 1
//                 if (s[i + 1] == 'X' || s[i + 1] == 'V') i++
//                 break
//             case 'V':
//                 num = num + 5
//                 break
//             case 'L':
//                 num = num + 50
//                 break
//             case 'D':
//                 num = num + 500
//                 break
//             case 'M':
//                 num = num + 1000
//         }
//     }
//     return num
// };

console.log(romanToInt("MCMXCIV"));


function romanToInt(s: string): number {
    let num = 0
    const map: Record<string, number> =
    {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    for (let i = 0; i < s.length; i++) {
        let value = map[s[i]]
        if (i + 1 < s.length && value < map[s[i + 1]]) {
            num -= value
        } else {
            num += value
        }
    }
    return num
}