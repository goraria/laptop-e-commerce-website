const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
// const { Session } = require('inspector');
// const session = require('express-session');

const {Sequelize} = require("sequelize");

const sequelize0 = new Sequelize(
    'wt_proj',
    'root',
    'Japtor@1999',
    {
        host: 'localhost',
        dialect: 'mysql',
        logging: false,
    }
);

const sequelize = new Sequelize('wt_proj', 'root', 'Japtor@1999', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
});

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});

const app = express();
const corsOptions = {
    origin: ['https://localhost:5173']
}
const port = 5172;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, '../frontend/build')));
// app.use('/api', apiRoutes);

// app.get('/', (req, res) => {
//     res.send('Hello from the backend!');
// });

app.post('/submit', (req, res) => {
    const { name, email } = req.body;

    console.log('Received data:', { name, email });
    res.json({ message: 'Data received successfully', data: { name, email } });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
