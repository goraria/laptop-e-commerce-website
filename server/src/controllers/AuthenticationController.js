const Account = require('../models/account');
const bcrypt = require('bcrypt');  // Sử dụng bcrypt cho mã hóa mật khẩu
const jwt = require('jsonwebtoken');

class AuthController {
    async login(req, res) {
        const { username, password } = req.body;

        try {
            const user = await Account.findOne({ where: { username } });
            if (!user) {
                return res.status(401).json({ message: 'Invalid username or password' });
            }

            const validPassword = await bcrypt.compare(password, user.password);
            if (!validPassword) {
                return res.status(401).json({ message: 'Invalid username or password' });
            }

            // Tạo JWT Token nếu đăng nhập thành công
            const token = jwt.sign(
                { id: user.idaccount, role: user.role },
                process.env.JWT_SECRET,  // Khóa bí mật JWT từ biến môi trường
                { expiresIn: '1h' }
            );

            return res.json({
                message: 'Login successful',
                token: token,
                user: {
                    id: user.idaccount,
                    username: user.username,
                    email: user.email,
                    role: user.role,
                }
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Server error' });
        }
    }
}

module.exports = new AuthController();
