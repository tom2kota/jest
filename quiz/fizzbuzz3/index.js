export default (n) => {
    let result = ''
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result = 'fizzbuzz'
            console.log(result)
        } else if (i % 3 === 0) {
            result = 'fizz'
            console.log(result)
        } else if (i % 5 === 0) {
            result = 'buzz'
            console.log(result)
        } else {
            result = i
            console.log(result)
        }
    }
}

