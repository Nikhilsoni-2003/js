const nonZeros = [1,3,5,7]
const zeroCount = 2

resultArray = [...nonZeros, ...Array(zeroCount).fill(0)];

console.log(resultArray);