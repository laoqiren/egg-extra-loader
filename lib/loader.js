const path = require('path');

// 主逻辑_laoqiren
module.exports = app => {
    const config = app.config.extraLoader;
    const {base='', toBind=['app'], defaultOptions={}, bindings=[]} = config;

    bindings.forEach(bind => {
        const {dir, property=dir, options: bindOptions={}} = bind;
        const loader = app.loader;

        const bindPath = path.join(app.baseDir,base,dir);
        const options = Object.assign({},defaultOptions,bindOptions);

        if(toBind.indexOf('app') !== -1){
            loader.loadToApp(bindPath,property,options);
        }
        if(toBind.indexOf('ctx') !== -1){
            loader.loadToContext(bindPath,property,options);
        }
    });
}