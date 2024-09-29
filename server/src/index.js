const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const { Session } = require('inspector');
const session = require('express-session');



const app = express();
const corsOptions = {
    origin: ['http://localhost:5173']
}
app.use(cors(corsOptions));

const port = 5172;

// app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, '../frontend/build')));
// app.use('/api', apiRoutes);

// app.get('/', (req, res) => {
//     res.send('Hello from the backend!');
// });

app.get("/api", (req, res) => {
    // const { name, email } = req.body;
    //
    // console.log('Received data:', { name, email });
    // res.json({ message: 'Data received successfully', data: { name, email } });
    res.json({name: ['Japtor', 'Goraria', 'Ichibulup'] });
});
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
