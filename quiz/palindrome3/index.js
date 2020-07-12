const palindrome = (str) => str.split('').every(
    (x, i) => x === str[str.length - 1 - i]
)
export default palindrome


