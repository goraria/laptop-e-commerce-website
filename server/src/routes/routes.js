const AuthenticationRoute = require('./AuthenticationRoute')

function routes(app) {
    app.use('/authentication', AuthenticationRoute);
}

module.exports = routes;