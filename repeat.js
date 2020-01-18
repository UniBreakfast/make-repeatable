
const makeRepeatable = require('./makeRepeatable')

const
  c = console.log,
  doAfter =(delay, fn)=> setTimeout(fn, delay),
  doEvery =(inter, fn)=> setInterval(fn, inter)

const

  tikTok =()=> c('Tik-tok...'),
  kap =()=> c('kap.'),

  makeCountFn =()=> {
    const count =()=> {
      const soMany = count.is? ++count.is : (count.is=1)
      c(`It's ${soMany} now`)
    }
    return count
  },

  count = makeCountFn()

/////////////////////////////////

const
  [startTiking, stopTiking] = makeRepeatable(tikTok, 1e3),
  [startKaping, stopKaping] = makeRepeatable(kap, 300),
  [startCounting, stopCounting] = makeRepeatable(count, 7e3)

doAfter(500, ()=> {
  startTiking(), startKaping()
  doAfter(1e4, ()=> {
    stopTiking(), stopKaping()
  })
})

doAfter(0, ()=> {
  startCounting()
  doAfter(1e3, startCounting)
  doAfter(2e3, startCounting)
  doAfter(3e3, startCounting)
})