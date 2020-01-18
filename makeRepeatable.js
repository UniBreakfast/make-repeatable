// Write a function that will take any function fn and an interval inter in ms and return two functions: one to (re)start calling fn every inter ms and another to stop doing that.

const makeRepeatable =(fn, inter)=> {
  const start =()=> {
    stop(), fn()
    start.intId = setInterval(fn, inter)
  }
  const stop =()=> clearInterval(start.intId)
  return [start, stop]
}

module.exports = makeRepeatable
