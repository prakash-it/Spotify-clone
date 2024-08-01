
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/DataBase')
const songs = require('./routes/Songroute.js')
const Albums = require('./routes/Albumroute.js')
const connectCloudinary  = require('./config/colud');

require('dotenv').config();

const app = express();
connectDB()
connectCloudinary()


app.use(express.json())
app.use(cors());

app.use('/song', songs);
app.use('/album', Albums)

app.use('/', (req, res) => {
    res.send("Hey User");
});



app.listen(process.env.PORT, () => {
    console.log("Server is running");
});
