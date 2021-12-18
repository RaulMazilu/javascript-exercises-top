const removeFromArray = function (list, itemsToRemove) {
    let newList = []
    let argsList = []
    let noOfArgs = arguments.length
    for (let i = 1; i <= noOfArgs; i++)
        argsList.push(arguments[i])
    for (item of list) {
        if (!argsList.includes(item)) {
            newList.push(item)
        }
    }
    return newList
};

// Do not edit below this line
module.exports = removeFromArray;
