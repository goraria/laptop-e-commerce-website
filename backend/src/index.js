// backend/index.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
// const apiRoutes = require('./routes/api');

const app = express();
const port = 9900;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../frontend/build')));
// app.use('/api', apiRoutes);

// app.get('/', (req, res) => {
//     res.send('Hello from the backend!');
// });

app.post('/submit', (req, res) => {
    const { name, email } = req.body;
    console.log('Received data:', { name, email });
    res.json({ message: 'Data received successfully', data: { name, email } });
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
