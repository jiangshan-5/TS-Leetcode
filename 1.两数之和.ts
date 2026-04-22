
let num:number[] = [3,2,4,7,10,9,2,33]

let target:number = 18

function getAddend(num:number[],target:number){
    for(let i = 0; i <= num.length; i++){
        let a = num[i]
        if(num.includes(target-a) && i != num.indexOf(target-a)){
            console.log(i)
            console.log(num.indexOf(target-a))
            break
        }
    }
}

getAddend(num,target)

// 确保程序退出
process.exit(0)


