const reverseString = function (str) {
    let reverse = ''
    let len = str.length - 1
    while (len >= 0) {
        reverse += str[len]
        len--
    }
    return reverse
};

// Do not edit below this line
module.exports = reverseString;
