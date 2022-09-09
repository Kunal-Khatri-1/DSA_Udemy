    // UNDERSTANDING

    // restate = even if there is one duplicate entry in the given arguements then return true otherwise false
    // inputs = strings, numbers
    // output = true/false

    //EXAMPLES

    // areThereDuplicates(1, 2, 3) // false
    // areThereDuplicates(1, 2, 2) // true 
    // areThereDuplicates('a', 'b', 'c', 'a') // true

    // edge case => areThereDuplicates(1, "1")
                    // areThereDuplicates(1,,2)

    // STEPS
    // interate over args array
    // add array element in a obj
    // if currentElement is not present in the obj then add it otherwise return true
    // else return false


function areThereDuplicates(...args) {

    let freqCounter = {}

    args.forEach(element => {
        if (freqCounter[element]) {
            console.log("There are duplicates")
            return true
        }

        freqCounter[element] = 1
    });

    console.log("There are no duplicates")
    return false
}

areThereDuplicates(1,2,3,4,5)