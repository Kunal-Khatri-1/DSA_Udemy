// UNDERSTAND
// restate => given array and minSum find length of subarray containing contiguos elements of arr. Sum of elements of the array should be the smallest number bigger than minSum
// input => array, minSum
// output => length of subarray containing contiguos elements of arr. Sum of elements of the array should be the smallest number bigger than minSum


// EXAMPLES

// minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray

// minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
// minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
// minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
// minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
// minSubArrayLen([4, 6, 1, 2, 0, 8, 3], 11) // 2
// minSubArrayLen([5, 6, 1, 2, 1, 8, 2], 11) // 2
// minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0
// edge cases => not for now


// STEPS
// sum up all the terms till sum equal to or just equal to minSum using j (beware of exit condition for j)
// i = 0, j = n
// let prevSum = sum
// sum = sum - arr[i]
// loop for j = n to j = arr.length - n
// check if sum >= prevSum then
    // sum = sum - arr[i + 1]
    // minSum = sum
// i++




function minSubArrayLen(arr, total) {
    console.log("***** arr: ", arr, "       ***** total: ", total, "*****")
    let sum = 0
    let j = 0
    let i = 0
    let minLen = Infinity
    let prevMinLen = Infinity
    let newSum = 0

    while (sum < total) {

        sum = sum + arr[j]

        if (total <= sum) break

        j++
    }

    console.log("initial sum: ", sum, "     j: ", j);


    while (j <= arr.length - 1) {

        console.log("i: ", i, "     j: ", j)
        
        newSum = sum - arr[i]
        prevMinLen = j - i + 1


        if (newSum >= total) {
            sum = newSum
            i++
            
            minLen = j - i + 1
            minLen = Math.min(prevMinLen, minLen)
        }

        else{
            j++
            
            sum = sum - arr[i] + arr[j]
            
            i++
        }
        
    }

    console.log("minLen: ", minLen)
    if(minLen === Infinity){
        minLen = 0
    }
    return minLen
}