var path = require('path');
var config = require('../config');

config.init({ user: { name: 'gavinning', age: 18 } });

config.set('user.tel', 1300)

console.log(config.get())

config.save('./config.json')
