export default (array, size) => {
    const result = [];
    for (let element of array) {
        const last = result[result.length - 1];
        (!last || last.length === size) ? result.push([element]) : last.push(element);
    }
    return result
}
