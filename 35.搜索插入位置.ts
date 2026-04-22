//搜索插入位置

//1.暴力解法
// function searchInsert(nums: number[], target: number): number {
//   let res = 0;

//   if (target > nums[nums.length - 1]) res = nums.length;

//   for (let i = 0; i < nums.length; i++) {
//     if (target == nums[i]) res = i;
//     if (target > nums[i - 1] && target < nums[i]) res = i;
//   }

//   return res;
// }

//2.2分解法
function searchInsert(nums: number[], target: number): number {
  let len = nums.length;
  let l = 0;
  let r = len - 1;

  while (l <= r) {
    let mid = Math.round(l + (r - l) / 2);
    const num = nums[mid];
    if (num === target) {
      return mid;
    } else if (num > target) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return l;
}

console.log(searchInsert([1, 4, 6, 7, 8, 9], 6));
