const reverseInt = (x) => parseInt(x.toString().split('').reverse().join('')) * Math.sign(x)

export default reverseInt
