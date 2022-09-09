function validAnagram(str1, str2){
    let obj1={};
    let obj2 = {};
    
    for(let letter of str1){
        obj1[letter] = ++obj1[letter] || 1;
    }
    
    for(let letter of str2){
        obj2[letter] = ++obj2[letter] || 1;
    }
    
    for (let key in obj1){
        if(obj1[key] != obj2[key]){
            return false;
        }
    }
    
    return true;
}