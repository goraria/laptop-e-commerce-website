const AuthenticationRoute = require('./AuthenticationRoute')
const ProductRouter = require('./ProductRouter')
const ProfileRouter = require('./ProfileRouter')
function routes(app) {
    app.use('/authentication', AuthenticationRoute);
    app.use('/products', ProductRouter);
    app.use('/profile',ProfileRouter)
}

module.exports = routes;