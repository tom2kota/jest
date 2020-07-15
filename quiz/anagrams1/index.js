export default (stringA, stringB) => cleanString(stringA) === cleanString(stringB)

const cleanString = (str) => str
    .replace(/W/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('')