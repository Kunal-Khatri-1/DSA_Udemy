function maxSubarraySum(arr, elemCount) {

    // don't do maxSum = 0 what if all the values are negative in the array
    let maxSum = -Infinity

    if (arr.length < elemCount) return null

    else {
        let i = 0
        let sum = 0

        for (let j = 0; j < arr.length; j++) {
            if (j < elemCount) {
                sum = sum + arr[j]
            }

            else{
                let prevSum = sum
                let newSum = sum + arr[j] - arr[i]
                

                if(newSum > prevSum){
                    maxSum = newSum
                }

                i++
            }
        }
    }

    console.log(`maxSum ${maxSum}`)
    return maxSum
}