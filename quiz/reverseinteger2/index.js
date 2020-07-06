const reverseInt = (x) => (x < 0) ? parseInt(x.toString().split('').reverse().join('')) * -1 : parseInt(x.toString().split('').reverse().join(''))

export default reverseInt
