const _  = require("lodash")

const integers = [-10, -5, 0, 1, 2, 3, 5, 8, 10]

const isOdd = (number) => number % 2 !== 0

const [odd, even] = _.partition(integers, isOdd)

console.log({odd, even});