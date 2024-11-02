const AuthenticationRoute = require('./AuthenticationRoute')
const ProductRouter = require('./ProductRouter')
const AddressRoute = require('./AddressRoute');
const AccountRoute = require('./AccountRoute')
const AdminRoute = require('./AdminRoute')
const CartRoute = require('./CartRouter')
const BillRoute = require('./BillRoute')

function routes(app) {
    app.use('/authentication', AuthenticationRoute);
    app.use('/products', ProductRouter);
    app.use('/cart', CartRoute);
    app.use('/bill', BillRoute);
    app.use('/address', AddressRoute);
    app.use('/admin', AdminRoute);
    app.use('/account', AccountRoute);
}

module.exports = routes;