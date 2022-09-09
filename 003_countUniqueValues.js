function countUniqueValues(arr){
    k = 0
    j = 1
    counter = 0
    arrLen = arr.length
    
    if(arrLen == 0){
        console.log(0)
        return 0
    }

    else{
        while (j <= (arrLen - 1)) {
            if (arr[k] == arr[j]) {
                console.log("i == j")
                j++
            }
            else{
                console.log("i != j")
                counter++
                k = j
                j++
            }
        }
    }
    

    console.log(++counter)
    return ++counter
}

countUniqueValues([1, 2, 2])
console.log("\n")
countUniqueValues([1, 2, 2, 3])