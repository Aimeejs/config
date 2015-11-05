# config

Aimee框架的config模块，用于处理配置文件


#### Install
```
aimee i config
```

#### Example
```javascript
var config = require('config');

config.init();

// eg1
config.set('foo', 'bar');
config.get('foo');					// => bar

// eg2
config.set('foo.bar', '123');
config.get('foo');					// => {bar: 123}
config.get('foo.bar');				// => 123

// eg3
config.merge('foo.bar', {
	test: 123
});
config.get('foo.bar');				// => {test: 123}
```  


#### Api

```
config.get 		// 获取配置
config.set 		// 覆盖设置  
config.merge 	// 合并设置  
```
