// UNDERSTAND
// restate => a function that takes an array and and a number "n" then finding the sub array of length "n" having cascading terms and maximum sum
// inputs => array, integer
// output => subarray that gives the maximum sum

// EXAMPLES
// maxSubarraySum([100,200,300,400], 2) // 700
// maxSubarraySum([1, 2, 3, 4, 5], 4) // 700
// maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39 
// maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
// maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
// maxSubarraySum([2,3], 3) // null
// edge cases => not as such

// STEPS
// let array = arr and integer = n from input
// let i = 0 and j = 0
// loop arr with j for n times and add first n terms
// if j+1 term > i term then maxSum = prevMaxSum + j term - i term
// else nothing


function maxSubarraySum(arr, num){
    
    if(arr.length < num) {
        return null
    }
    
    
    let i = 0
    let j = 0
    let sum = 0
    let maxSum = -Infinity

    for (j = 0; j < num; j++) {
        sum = sum + arr[j]
    }

    maxSum = sum
    
    console.log("sum = maxSum : ", maxSum, "    j: ", j)

    for (let i = 0; i < (arr.length - num + 1); i++) {
        if (sum > maxSum) {
            maxSum = sum
        }

        sum = sum + arr[j] - arr[i]

        j++
    }
    
    console.log("maxSum: ", maxSum)
}


maxSubarraySum([100,200,300,400], 2)