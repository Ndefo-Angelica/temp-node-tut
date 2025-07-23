// const names = require('./4-names')
// const sayHi = require('./5-utils')
// const data = require('./6-alternative-flavor.js')
// require('./7-mind-grenade')
// sayHi('susan')
// sayHi(names.john)
// sayHi(names.peter)

const os = require('os')

const user=os.userInfo()
console.log(user)

console.log(`The system uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS)