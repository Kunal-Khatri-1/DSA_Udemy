    // UNDERSTANDING THE PROBLEM
    // restate => given a "SORTED" array find such pair so that sum of them is 2wice the average value
    // input => SORTED array, average value
    // output => true/false

    // EXAMPLES
    // averagePair([1,2,3],2.5) // true
    // averagePair([-1,0,3,4,5,6], 4.1) // false
    // averagePair([-1,"3",3,"4",5,6], 4) // true
    // averagePair([],4) // false
    // edge cases => avoiding for now

    // STEPS
    // two pointers at the extereme end of the array (i, j)
    // value to be found = 2wice avg value = val
    // if i + j < val then increase i
    // else if i + j > val then decrease j
    // else return true
    // otherwise false


function averagePair(arr, avg){
    let val = 2 * avg

    if (arr.length == 0) {
        return false
    }
    else{
        let i = 0
        let j = arr.length - 1

        while( i > j ){
            if (arr[i] + arr[j] > val) {
                i++
            }
            else if (arr[i] + arr[j] < val) {
                
            }
        }
    }
}