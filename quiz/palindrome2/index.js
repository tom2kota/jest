const palindrome = (str) => str.split('').reduce((a, b) => b + a, '') === str
export default palindrome


