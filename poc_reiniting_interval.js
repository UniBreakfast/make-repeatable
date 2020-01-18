// Write a function that will take any function fn and an interval inter in ms and return a new function. That new function should stop its previous run if was called earlier, run function fn immediately and every next inter ms and return a new function that will stop it.

const c = console.log

const

  makeRep =(fn, inter)=> {
    const start =()=> {
      const stop =()=> clearInterval(start.intId)
      stop(), fn()
      start.intId = setInterval(fn, inter)
      return stop
    }
    return start
  },

  tikTok =()=> c('Tik-tok...'),
  kap =()=> c('kap.'),

  makeCountFn =()=> ()=> c(`It's ${count.is? ++count.is : (count.is=1)} now`),

  count = makeCountFn()

////////////////////////////////////////////////

const
  tikTok_nowAndEverySecond = makeRep(tikTok, 1e3),
  pammm_nowAndEvery300ms = makeRep(kap, 300),

  stop_tikTok_nowAndEverySecond = tikTok_nowAndEverySecond(),
  stop_pammm_nowAndEvery300ms = pammm_nowAndEvery300ms()

setTimeout(stop_tikTok_nowAndEverySecond, 7e3)
setTimeout(stop_pammm_nowAndEvery300ms, 7e3)

//////////////////////////////////

const
  count_nowAndEvery7seconds = makeRep(count, 7e3),

  stop_count_nowAndEvery7seconds = count_nowAndEvery7seconds()

setTimeout(count_nowAndEvery7seconds, 3e3)
setTimeout(count_nowAndEvery7seconds, 4e3)




////////////////////////////////////////

setTimeout(c, 1e9)