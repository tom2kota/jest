const str = 'zxcxxxxbnmm2222224444444'
let result = {}
let maxResult = 0
let maxResultKey = ''

const strToObject = (str) => {
    for (let key of str) {
        (result[key]) ? result[key]++ : result[key] = 1
    }
    return result
}

const maxKeyValue = (result, maxResult, maxResultKey) => {
    for (let key in result) {

        if (result[key] > maxResult) {
            maxResult = result[key]
            maxResultKey = key
        }
    }

    return maxResultKey
}

maxKeyValue(strToObject(str), maxResult, maxResultKey)