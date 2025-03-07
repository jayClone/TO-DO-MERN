const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const env = require('dotenv');

env.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => 
    res.send('API Running')
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));