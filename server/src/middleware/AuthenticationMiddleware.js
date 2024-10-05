const jwt = require('jsonwebtoken');

const AuthenticationMiddleware = async (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).json({message: 'No token provided'});
    }

    // try {
    //     const decoded = jwt.verify(token, process.env.JWT_SECRET);
    //     req.user = decoded;
    //     next();
    // } catch (error) {
    //     return res.status(401).json({message: 'Unauthorized'});
    // }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'gorth');
        req.user = decoded;

        const account = await Account.findOne({where: {idaccount: decoded.id}});

        if (!account || account.status !== 1) {
            return res.status(401).json({message: 'User not logged in or status is not active'});
        }

        next();
    } catch (error) {
        return res.status(401).json({message: 'Unauthorized', error});
    }
};

module.exports = AuthenticationMiddleware;
