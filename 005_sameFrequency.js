    // UNDERSTAND THE PROBLEM
    // restatement = given two numbers should have same equal number of digits and same digits but not neccessarily in the same order
    // inputs = two integers
    // output = true/false

    // EXPLORE EXAMPLES
    // 1112, 2111 = true
    // 12,112 = false
    // 123, 213 = true
    // 123, 241 = false
    // 122, 211 = false
    // no edge case as such

    // STEPS
    // convert the two input integers to string
    // end if string have different length
    // store frequency of each number in a object for the two strings
    // for str1 add/increase frequencey
    // for str2 if char does not exist then end
    // otherwise sub from array freq

    // return true


    function sameFrequency(first, second){
        first = String(first)
        second = String(second)
        console.log("This is first and second string", typeof(first), typeof(second))
    
        if ( first.length == second.length ) {
            console.log("strings have same length")
            
            let freqCounter = {}
    
            for (let i = 0; i < first.length; i++) {
                freqCounter[first[i]] ? (freqCounter[first[i]] += 1) : (freqCounter[first[i]] = 1)
            }
            
            console.log("this is the freqCounter: ", freqCounter)
    
            for (let j = 0; j < second.length; j++) {
                if (!freqCounter[second[j]]) {
                    console.log("This key was not presen t in the freqCounter: ", freqCounter)
                    return false
                }
                
                // to take into account for the case 11,12
                freqCounter[second[j]] -= 1
            }
            
            console.log("The two numbers are anagrams")
            return true
        }
        else{
            console.log("strings have different lengths")
            return false
        }
    }
    
    //sameFrequency(1,11)
    //sameFrequency(11,11)
    //sameFrequency(12342234,44222331)
    sameFrequency(12,11)