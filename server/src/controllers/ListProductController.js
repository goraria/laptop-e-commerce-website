const db = require('../config/database'); // Import kết nối tới database

// Controller để lấy tất cả người dùng từ database
const getAllProduct = (req, res) => {
  const query = 'SELECT * FROM product'; // Query SQL

  db.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Error querying database' });
    } else {
      res.status(200).json(results); // Trả về dữ liệu JSON
    }
  });
};

module.exports = { getAllProduct };
