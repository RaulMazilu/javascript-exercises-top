const repeatString = function (text, repeatTimes) {
    let initialText = text
    if (repeatTimes > 0) {
        for (let i = 1; i < repeatTimes; i++)
            text += initialText
        return text
    }
    else if (repeatTimes === 0)
        return ''
    else
        return 'ERROR'
};

// Do not edit below this line
module.exports = repeatString;
