//单个数组去重
let array = [1, 2, 2, 3, 3, 4, 5, 5]
let uniqueArray = new Set(array)
console.log(uniqueArray)

//两个数组去重
const array1 = [1, 2, 3, 4]
const array2 = [3, 4, 5, 6]

// 将两个数组合并并使用Set去重
const mergedArray = new Set([...array1, ...array2])
console.log(mergedArray)

// 计算两个数组的交集
const intersection = array1.filter((item) => array2.includes(item))
console.log(intersection)

// 计算两个数组的并集
const union = [...new Set([...array1, ...array2])]
console.log(union)

// 计算两个数组的差集
// const difference = array1.filter((item) => !array2.includes(item))
// console.log(difference)
const difference1 = array1.filter((item) => !array2.includes(item))
const difference2 = array2.filter((item) => !array1.includes(item))

const symmetricDifference = [...difference1, ...difference2]

console.log(symmetricDifference)
