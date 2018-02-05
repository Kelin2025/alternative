const curry = keys => fn => args => {
  if (
    process.env.NODE_ENV !== 'production' &&
    args !== undefined &&
    (typeof args !== 'object' || args === null)
  ) {
    throw new TypeError('[alt.curry] args should be an object or undefined')
  }
  return args === undefined
    ? curry(keys)(fn)
    : keys.every(k => k in args)
      ? fn(args)
      : newArgs =>
          curry(keys.filter(k => !(k in args)))(fn)({ ...args, ...newArgs })
}

export default curry
