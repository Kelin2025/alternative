import curry from './index'

const fn = curry('a,b,c')(({ a, b, c }) => a + b + c)

it('invokes fn with args if all keys passed', () => {
  expect(fn({ a: 1, b: 2, c: 3 })).toBe(6)
})

it('returns new function if some of args not specified', () => {
  expect(fn({ a: 1 })({ b: 2, c: 3 })).toBe(6)
  expect(fn({ a: 1, b: 2 })({ c: 3 })).toBe(6)
  expect(fn()({ a: 1, b: 2, c: 3 })).toBe(6)
})

it('accepts extra args if needed', () => {
  const a = curry(['a'])(({ a, b }) => a + b)
  expect(a({ a: 1, b: 2 })).toBe(3)
})
