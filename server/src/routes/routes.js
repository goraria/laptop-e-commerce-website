const AuthenticationRoute = require('./AuthenticationRoute')
const ProductRouter = require('./ProductRouter')
const AddressRoute = require('./AddressRoute');
const AdminRoute = require('./AdminRoute')

function routes(app) {
    app.use('/authentication', AuthenticationRoute);
    app.use('/products', ProductRouter);
    app.use('/address', AddressRoute);
    app.use('/admin', AdminRoute);
}

module.exports = routes;