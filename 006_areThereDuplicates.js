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

    let freqCounterString = {}
    let freqCounterNumber = {}
    let duplicate = false

    args.forEach(element => {

        if (typeof(element) == "string") {  // this line
            freqCounterString[element] ? (freqCounterString[element] += 1) : (freqCounterString[element] = 1)

            if (freqCounterString[element] > 1) {
                console.log("There are duplicates")
                return duplicate =  true
            }
        }

        else{
            freqCounterNumber[element] ? (freqCounterNumber[element] += 1) : (freqCounterNumber[element] = 1)

            if (freqCounterNumber[element] > 1) {
                console.log("There are duplicates")
                return duplicate =  true
            }
        }
    });

    if (duplicate) {
        console.log("There are duplicates")
        return true
    }

    console.log("There are NO duplicates")
    return false
}

areThereDuplicates(1,2,3,4,5)