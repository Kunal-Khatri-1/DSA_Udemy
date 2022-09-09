// O(n^2) complexity

function sumZero(arr){
    for (let i = 0; i < arr.length; i++) {
        for (let j = arr.length - 1; j > i; j--) {
            console.log(i, j)
            if(arr[i] + arr[j] == 0){
                console.log("YES!")
                return true
            }            
        }
    }
    console.log("No!")
    return undefined
}

sumZero([-1, -2, -3, 0])


// Refactoring - 1 ==> O(n) time complexity

function sumZero(arr){
    let i = 0
    let j = arr.length - 1

    while (i != j){
        if (arr[i] + arr[j] == 0) {
            console.log("Yes!", [arr[i], arr[j]])
            return ([arr[i], arr[j]])
        }
        else if (arr[i] + arr[j] >= 1) {
            console.log("j > i")
            arr[j] = arr[j - 1]
            j = j - 1
        }
        else{
            console.log("i > j")
            arr[i] = arr[i + 1]
            i = 1 + 1
        }
    }
    console.log("No!")
    return undefined
}

sumZero([-1, 0, 1, 2, 3, 4])