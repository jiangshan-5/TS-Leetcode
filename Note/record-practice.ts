// Record 类型练习题

// ==================== 练习 1：基础用法 ====================
// 创建一个学生成绩映射，键是学生名字，值是分数
// TODO: 补全类型定义
const studentScores = {
    'Alice': 95,
    'Bob': 87,
    'Charlie': 92
};

type Student = {
    name:string,
    scores:number
}

const StuScores:Record<string,Student> = {
    'Alice':{name : 'Alice',scores:95},
    'Bob': {name:'Bob',scores:87},
    'Charlie':{name:'Charlie',scores:92}
}

console.log('练习1:', StuScores['Bob']);


// ==================== 练习 2：字符计数 ====================
// 实现一个函数，统计字符串中每个字符出现的次数
// TODO: 补全函数签名和实现
function countChars(str: string) {
    // 你的代码
    const charCount:Record<string,number> = {}

    for(const char of str){
        charCount[char] = char in charCount ?  charCount[char] + 1 :  1
    }

    return charCount
}

console.log('练习2:', countChars('hello')); // 应该输出 { h: 1, e: 1, l: 2, o: 1 }


// ==================== 练习 3：限定键的范围 ====================
// 创建一个方向到坐标变化的映射
// 要求：必须包含 'up', 'down', 'left', 'right' 四个键
type Direction = 'up' | 'down' | 'left' | 'right';

// TODO: 使用 Record 定义类型
const directionMap = {
    up: { x: 0, y: -1 },
    down: { x: 0, y: 1 },
    left: { x: -1, y: 0 },
    right: { x: 1, y: 0 }
};
type zuobiao = {
    x:number,
    y:number
}

const directionRecord:Record<Direction,zuobiao> = {
    'up' : {x :0,y:-1},
    'down' :  { x: 0, y: 1 },
    'left': { x: -1, y: 0 },
    'right': { x: 1, y: 0 }
}

console.log('练习3:', directionRecord);


// ==================== 练习 4：HTTP 状态码 ====================
// 创建一个 HTTP 状态码到消息的映射
// TODO: 补全类型定义
const httpStatus = {
    200: 'OK',
    201: 'Created',
    400: 'Bad Request',
    404: 'Not Found',
    500: 'Internal Server Error'
};

const httpStatusRecord:Record<number,string> = {
    200: 'OK',
    201: 'Created',
    400: 'Bad Request',
    404: 'Not Found',
    500: 'Internal Server Error'
}

console.log('练习4:', httpStatus[404]);


// ==================== 练习 5：单词频率统计 ====================
// 实现一个函数，统计句子中每个单词出现的次数
// TODO: 补全函数实现
function wordFrequency(sentence: string): Record<string, number> {
    
    // 提示：先用 split 分割单词，然后统计
    // 你的代码
}

console.log('练习5:', wordFrequency('hello world hello')); 
// 应该输出 { hello: 2, world: 1 }


// ==================== 练习 6：配置对象 ====================
// 创建一个应用配置对象，键是配置项名称，值是布尔值
// TODO: 补全类型定义和实现
const appConfig = {
    darkMode: true,
    notifications: false,
    autoSave: true,
    soundEffects: false
};

// 实现一个函数来切换配置
function toggleConfig(config: any, key: string): void {
    // TODO: 实现切换逻辑
}

console.log('练习6:', appConfig);


// ==================== 练习 7：分组 ====================
// 实现一个函数，将数组按照某个属性分组
// TODO: 补全函数实现
function groupBy<T>(array: T[], key: keyof T): Record<string, T[]> {
    // 你的代码
}

const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 }
];

console.log('练习7:', groupBy(users, 'age'));
// 应该输出 { '25': [{name: 'Alice', age: 25}, {name: 'Charlie', age: 25}], '30': [{name: 'Bob', age: 30}] }


// ==================== 练习 8：缓存实现 ====================
// 实现一个简单的缓存类
// TODO: 补全类实现
class Cache<T> {
    private data: Record<string, T> = {};
    
    set(key: string, value: T): void {
        // 你的代码
    }
    
    get(key: string): T | undefined {
        // 你的代码
    }
    
    has(key: string): boolean {
        // 你的代码
    }
    
    clear(): void {
        // 你的代码
    }
}

const cache = new Cache<number>();
cache.set('a', 1);
cache.set('b', 2);
console.log('练习8:', cache.get('a')); // 应该输出 1


// ==================== 练习 9：性能优化 (Array vs Map) ====================
// 在 LeetCode 383 (赎金信) 中，如果已知字符只有 26 个小写字母，
// 使用 Int32Array(26) 通常比 Map<string, number> 更快。
// TODO: 实现一个使用 Int32Array 的字符计数函数
function countCharsOptimized(str: string): Int32Array {
    const count = new Int32Array(26);
    const base = 'a'.charCodeAt(0);
    for (const char of str) {
        count[char.charCodeAt(0) - base]++;
    }
    return count;
}

// ==================== 答案区域（先自己做，做不出来再看） ====================


/*
// ==================== 答案参考 ====================

// 练习 1 答案
const studentScores: Record<string, number> = {
    'Alice': 95,
    'Bob': 87,
    'Charlie': 92
};

// 练习 2 答案
function countChars(str: string): Record<string, number> {
    const count: Record<string, number> = {};
    for (const char of str) {
        count[char] = (count[char] || 0) + 1;
    }
    return count;
}

// 练习 3 答案
const directionMap: Record<Direction, { x: number; y: number }> = {
    up: { x: 0, y: -1 },
    down: { x: 0, y: 1 },
    left: { x: -1, y: 0 },
    right: { x: 1, y: 0 }
};

// 练习 4 答案
const httpStatus: Record<number, string> = {
    200: 'OK',
    201: 'Created',
    400: 'Bad Request',
    404: 'Not Found',
    500: 'Internal Server Error'
};

// 练习 5 答案
function wordFrequency(sentence: string): Record<string, number> {
    const words = sentence.toLowerCase().split(' ');
    const freq: Record<string, number> = {};
    for (const word of words) {
        freq[word] = (freq[word] || 0) + 1;
    }
    return freq;
}

// 练习 6 答案
const appConfig: Record<string, boolean> = {
    darkMode: true,
    notifications: false,
    autoSave: true,
    soundEffects: false
};

function toggleConfig(config: Record<string, boolean>, key: string): void {
    if (key in config) {
        config[key] = !config[key];
    }
}

// 练习 7 答案
function groupBy<T>(array: T[], key: keyof T): Record<string, T[]> {
    const result: Record<string, T[]> = {};
    for (const item of array) {
        const groupKey = String(item[key]);
        if (!result[groupKey]) {
            result[groupKey] = [];
        }
        result[groupKey].push(item);
    }
    return result;
}

// 练习 8 答案
class Cache<T> {
    private data: Record<string, T> = {};
    
    set(key: string, value: T): void {
        this.data[key] = value;
    }
    
    get(key: string): T | undefined {
        return this.data[key];
    }
    
    has(key: string): boolean {
        return key in this.data;
    }
    
    clear(): void {
        this.data = {};
    }
}

*/
