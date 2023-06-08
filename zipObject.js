const _ = require("lodash")

const headers = ["id", "name", "age"]
const tables = [[1, "Hoa", 24], [2, "Hieu", 19], [3, "Mai", 25]]

const users = tables.map(info => _.zipObject(headers, info)) 

console.log({users});