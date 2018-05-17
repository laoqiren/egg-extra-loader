# egg-extra-loader
提供更加方便的`loader`扩展。

## Install

```bash
$ npm i egg-extra-loader --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.extraLoader = {
  enable: true,
  package: 'egg-extra-loader',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.extraLoader = {
    base: 'app',
    toBind: ['app','ctx'],
    defaultOptions: {
        call: false
    },
    bindings: [
        {
            dir: 'love',
            property: 'love',
            toBind: ['ctx']
        },
        {
            dir: 'models',
            property: 'model',
            toBind: ['app'],
            options: {
                call: true
            }
        }
    ]
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

```js
// app/love/love.js
module.exports = {
    sayLove(){
        console.log("I love you")
    }
}

// app/models/hello.js
module.exports = app => {
    return {
        sayHello(){
            console.log("hello")
        }
    }
}

// app.js
const ctx = app.createAnonymousContext();
ctx.love.love.sayLove();
app.model.hello.sayHello();
```
## License

[MIT](LICENSE)
