const maxKeyValue = (str) => {

    let result = {}
    let maxResult = 0
    let maxResultKey = ''

    for (let key of str) {
        (result[key]) ? result[key]++ : result[key] = 1
    }

    for (let key in result) {

        if (result[key] > maxResult) {
            maxResult = result[key]
            maxResultKey = key
        }
    }

    return maxResultKey
}

export default maxKeyValue