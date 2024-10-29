const AuthenticationRoute = require('./AuthenticationRoute')
const ProductRouter = require('./ProductRouter')
const AddressRoute = require('./AddressRoute');
const AccountRoute = require('./AccountRoute')
const AdminRoute = require('./AdminRoute')

function routes(app) {
    app.use('/authentication', AuthenticationRoute);
    app.use('/products', ProductRouter);
    app.use('/address', AddressRoute);
    app.use('/admin', AdminRoute);
    app.use('/account', AccountRoute);
}

module.exports = routes;