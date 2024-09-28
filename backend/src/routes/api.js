const express = require('express');
const router = express.Router();
const connection = require('../config/database');

// router.get('/users', (req, res) => {
//     connection.query('SELECT * FROM users', (error, results) => {
//         if (error) throw error;
//         res.json(results);
//     });
// });

// router.post('/users', (req, res) => {
//     const { name, email } = req.body;
//     connection.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email], (error, results) => {
//         if (error) throw error;
//         res.json({ message: 'User created', userId: results.insertId });
//     });
// });

router

module.exports = router;
