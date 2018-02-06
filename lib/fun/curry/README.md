# curry

### Description

Alternative for curried functions  
Wraps a function that accepts an object of arguments that allows you to pass arguments partial and order doesn't matter  
Can be greatly combined with ES6 destructuring  
Also can accept extra args as optional

### Basic example

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

### Use cases

For example, we can create a nice `map` function:

```javascript
const map = curry('cb,data')(({ cb, data }) => data.map(i => cb(i)))
```

So, when we have data or callback and want work with 'em:

```javascript
const numbers = [1, 2, 3, 4, 5]
const inc = x => x + 1
```

We can do smth like:

```javascript
const mapNmbers = map({ data: numbers })
const mapInc = map({ cb: inc })
```

And use it:

```javascript
mapNumbers({ cb: x => x * 2 }) // => [2, 4, 6, 8, 10]
mapInc({ data: [1, 2, 3, 4, 5] }) // => [2, 3, 4, 5, 6]
```

I think it's better than use **placeholders** or, even worse, `_.rearg`
