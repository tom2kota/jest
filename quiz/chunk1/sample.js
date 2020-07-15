((array, size) => {
    const result = [];
    let index = 0;
    while (index < array.length) {
        result.push(array.slice(index, index + size));
        index += size;
    }
    console.log(result)
    return result;

})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)
