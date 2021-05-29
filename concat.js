const concat = (...args) => args.map(a => [a].flat()).reduce((acc,curr) => acc.concat(curr), [])

export { concat }