function countUniqueValues(arr) {
    let i = 0

    // the last value of arr[j] will be undefined therefore shows correct result
    // otherwise we would have to increase the i in the end but then you would have to put if condition to check for empty arrays

    for (let j = 1; j <= arr.length; j++) {
        if (arr[j] != arr[i]) {
            i++
            arr[i] = arr[j]
        }        
    }

    console.log(i)
    return i
}

countUniqueValues([1,1,1,2,2,2,3])
countUniqueValues([1,1,1,2,2,2,])