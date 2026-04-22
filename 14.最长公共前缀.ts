import { log } from "node:console";

//最长公共前缀
function longestCommonPrefix(strs: string[]): string {
  let result = strs[0];

  for (let i = 1; i < strs.length; i++) {
    const str = strs[i];
    while (result.length > 0 && !str.startsWith(result)) {
      result = result.slice(0, result.length - 1);
    }
    if (result.length == 0) {
      return "";
    }
  }
  return result;
}

console.log(longestCommonPrefix(["flower", "floor", "flabc"]));
