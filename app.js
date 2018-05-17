module.exports = app => {
    require('./lib/loader')(app);

    const ctx = app.createAnonymousContext();

    ctx.love.love.sayLove();

    app.model.hello.sayHello();
}