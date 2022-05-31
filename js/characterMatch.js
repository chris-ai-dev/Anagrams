exports.isCharacterMatch = function(string1, string2) {
    let string1Change = string1.toLowerCase().split("").sort().join("");
    let string2Change = string2.toLowerCase().split("").sort().join("");
    return string1Change === string2Change;


};

console.log(exports.isCharacterMatch('abcde2', 'c2abed'))