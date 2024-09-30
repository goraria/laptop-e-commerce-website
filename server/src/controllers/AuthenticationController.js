const Account = require('../models/Account');
const User = require('../models/User');
const bcrypt = require('bcrypt');  // Sử dụng bcrypt cho mã hóa mật khẩu
const jwt = require('jsonwebtoken');

class AuthenticationController {
    async login(req, res) {
        // const { username, password } = req.body;
        //
        // try {
        //     const user = await Account.findOne({ where: { username } });
        //     if (!user) {
        //         return res.status(401).json({ message: 'Invalid username or password' });
        //     }
        //
        //     const validPassword = await bcrypt.compare(password, user.password);
        //     if (!validPassword) {
        //         return res.status(401).json({ message: 'Invalid username or password' });
        //     }
        //
        //     // Tạo JWT Token nếu đăng nhập thành công
        //     const token = jwt.sign(
        //         { id: user.idaccount, role: user.role },
        //         process.env.JWT_SECRET,  // Khóa bí mật JWT từ biến môi trường
        //         { expiresIn: '1h' }
        //     );
        //
        //     return res.json({
        //         message: 'Login successful',
        //         token: token,
        //         user: {
        //             id: user.idaccount,
        //             username: user.username,
        //             email: user.email,
        //             role: user.role,
        //         }
        //     });
        // } catch (error) {
        //     console.error(error);
        //     return res.status(500).json({ message: 'Server error' });
        // }

        // const { username, password } = req.body;
        //
        // try {
        //     const user = await Account.findOne({ where: { username } });
        //
        //     if (!user) {
        //         return res.status(404).json({ message: 'User not found' });
        //     }
        //
        //     const validPassword = await bcrypt.compare(password, user.password);
        //     if (!validPassword) {
        //         return res.status(401).json({ message: 'Invalid credentials' });
        //     }
        //
        //     const token = jwt.sign({ id: user.idaccount, username: user.username }, 'your_jwt_secret', { expiresIn: '1h' });
        //
        //     res.json({ message: 'Login successful', token });
        // } catch (error) {
        //     console.error(error);
        //     res.status(500).json({ message: 'Server error' });
        // }

        const { username, password } = req.body;
        console.log(username, password);
        try {
            const account = await Account.findOne({ where: { username, password } });

            if (!account) {
                return res.status(401).json({ message: 'Invalid username or password' });
            }

            // const validPassword = await bcrypt.compare(password, user.password);
            const validPassword = password === account.password;
            if (!validPassword) {
                return res.status(401).json({ message: 'Invalid username or password' });
            }

            const token = jwt.sign({ id: account.idaccount, username: account.username }, 'japtor', { expiresIn: '1h' });

            return res.json({ message: 'Login successful', token });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Server error' });
        }
    }

    async register(req, res) {
        // const { username, password } = req.body;
        // // console.log(username, password);
        // try {
        //     const account = await Account.findOne({ where: { username, password } });
        //
        //     if (!account) {
        //         return res.status(401).json({ message: 'Invalid username or password' });
        //     }
        //
        //     // const validPassword = await bcrypt.compare(password, user.password);
        //     const validPassword = password === account.password;
        //     if (!validPassword) {
        //         return res.status(401).json({ message: 'Invalid username or password' });
        //     }
        //
        //     const token = jwt.sign({ id: account.idaccount, username: account.username }, 'japtor', { expiresIn: '1h' });
        //
        //     return res.json({ message: 'Register successful', token });
        // } catch (error) {
        //     console.error(error);
        //     return res.status(500).json({ message: 'Server error' });
        // }

        // const { username, password, email, firstname, lastname, phone } = req.body;
        //
        // try {
        //     const existingUser = await Account.findOne({ where: { username } });
        //     if (existingUser) {
        //         return res.status(400).json({ message: 'Username already exists' });
        //     }
        //
        //     // const hashedPassword = await bcrypt.hash(password, 10);
        //
        //     const newAccount = await Account.create({
        //         username,
        //         // password: hashedPassword,
        //         password,
        //         role: 0,
        //         status: 0,
        //     });
        //
        //     const newUser = await User.create({
        //         email,
        //         firstname,
        //         lastname,
        //         phone,
        //     });
        //
        //     return res.status(201).json({
        //         message: 'User registered successfully',
        //         user: {
        //             id: newAccount.idaccount,
        //             username: newAccount.username,
        //             email: newAccount.email,
        //             firstname: newAccount.firstname,
        //             lastname: newAccount.lastname,
        //             phone: newAccount.phone,
        //         }
        //     });
        // } catch (error) {
        //     console.error(error);
        //     return res.status(500).json({ message: 'Server error' });
        // }

        const { username, password, email, firstname, lastname, phone, avatar } = req.body;

        console.log(req.body);
        try {
            const existingAccount = await Account.findOne({ where: { username } });
            if (existingAccount) {
                return res.status(400).json({ error: 'Username already exists' });
            }

            const hashedPassword = await bcrypt.hash(password, 10);

            const newAccount = await Account.create({
                username,
                password: hashedPassword,
                email,
                role: 0,
                status: 0,
            });

            const newUser = await User.create({
                idaccount: newAccount.idaccount,
                firstname,
                lastname,
                phone_number: phone,
                avatar: null,
            });

            return res.status(201).json({
                message: 'User registered successfully',
                account: newAccount,
                user: newUser
            });

        } catch (error) {
            return res.status(500).json({ error: 'Error registering user' });
        }
    }
}

module.exports = new AuthenticationController()
