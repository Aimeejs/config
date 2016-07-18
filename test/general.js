var config = require('../config');

console.log(config.get())

config.init({name: 'gavinning'})
console.log(config.general())

config.general('age', 18)
console.log(config.general())
