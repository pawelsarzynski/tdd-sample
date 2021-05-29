const concat = function(...args) {
    const arrifiedArgs = args.map(a => [a].flat())
   
    return arrifiedArgs.reduce((acc,curr) => acc.concat(curr),[])
   };
   
   export { concat }