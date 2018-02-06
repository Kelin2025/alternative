# curry

### Description

Alternative for curried functions  
Wraps a function that accepts an object of arguments that allows you to pass arguments partial and order doesn't matter  
Can be greatly combined with ES6 destructuring  
Also can accept extra args as optional

### Example

```javascript
const pow = curry('a,b')(({ a, b }) => a ** b)

console.log(pow({ a: 2, b: 3 }))
// => 8

const pow2 = pow({ a: 2 })
console.log(pow2({ b: 3 }))
// => 8
console.log(pow2({ b: 4 }))
// => 16

const to2 = pow({ b: 2 })
console.log(to2({ b: 2 }))
// => 4
console.log(to2({ b: 3 }))
// => 9
```
