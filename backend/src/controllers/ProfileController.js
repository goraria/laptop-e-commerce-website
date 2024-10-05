const Account = require('../models/Account');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

class ProfileController {
    async getProfile(req, res) {
        const { idaccount } = req.params; // Extract idaccount from request params

        try {
            const account = await Account.findOne({ where: { idaccount } });

            if (!account) {
                return res.status(404).json({ message: 'Account not found' });
            }

            const user = await User.findOne({ where: { idaccount: account.idaccount } });

            if (!user) {
                return res.status(404).json({ message: 'User profile not found' });
            }

            return res.json({
                message: 'Profile fetched successfully',
                user: {
                    id: user.iduser,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    email: account.email,  
                    phone: user.phone_number,
                    avatar: user.avatar,
                    role: account.role,
                    status: account.status,
                }
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Server error' });
        }
    }
}

module.exports = new ProfileController();