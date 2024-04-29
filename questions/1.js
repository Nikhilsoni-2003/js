const nums = [3,30,34,5,9]

var largestNumber = function(nums) {
    nums.sort()
    nums.reverse()
    const result = nums.join("")
    nums = Array.from(result)
    const nonZeros = nums.filter(element => element !== "0");
    const zeroCount = nums.length - nonZeros.length;
    resultArray = [...nonZeros, ...Array(zeroCount).fill(0)];
    const result3 = resultArray.join("")
    return result3;
    
};

console.log(largestNumber(nums));