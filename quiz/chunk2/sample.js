((array, size) => {
    const chunked = [];

    for (let element of array) {
        const last = chunked[chunked.length - 1];

        if (!last || last.length === size) {
            chunked.push([element]);
        } else {
            last.push(element);
        }
    }
    console.log(chunked)
    return chunked;
})([1, 2, 3, 4, 5, 6, 7, 8], 2)
