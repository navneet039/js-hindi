const score=400

const balance=new Number(100)
console.log(score)
console.log(balance)

console.log(balance.toString().length)
console.log(balance.toFixed(2))


const anothernumber=1123.4578
console.log(anothernumber.toPrecision(3))
console.log(anothernumber.toPrecision(5))


const hundred=100000000
console.log(hundred.toLocaleString('en-IN'))

console.log(Number.MIN_VALUE)
console.log(Number.MAX_VALUE)


//****************maths */


console.log(Math)
console.log(Math.abs(-3))
console.log(Math.round())
console.log(Math.ceil(6.7))
console.log(Math.floor(8.9))
console.log(Math.min(4,3,5,6))

console.log(Math.random())
console.log((Math.random()*10)+1)


const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1)+min))
