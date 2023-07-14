const list = ['a', 'b', 'c']
const i = 8
const n = list.length
console.log(list[(i % n + n)%n])