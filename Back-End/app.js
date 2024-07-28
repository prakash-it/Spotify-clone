// app.js
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/DataBase')
const song = require('./routes/songroute');
const connectCloudinary  = require('./config/colud');

require('dotenv').config();

const app = express();
connectDB()
connectCloudinary()


app.use(express.json());
app.use(cors());

app.use('/', (req, res) => {
    res.send("Hey User");
});

app.use('/song', song);

app.listen(process.env.PORT, () => {
    console.log("Server is running");
});
