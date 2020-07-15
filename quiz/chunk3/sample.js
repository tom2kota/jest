((array, size) => {
    const result = [];

    for (let el of array) {
        const last = result[result.length - 1];
        (!last || last.length === size) ? result.push([el]) : last.push(el)
        console.log('el:', el)
        console.log('last:', last)
    }
    console.log(result)
    return result
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)
