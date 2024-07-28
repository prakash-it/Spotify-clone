const { addsong, listsong } = require('../controllers/songcontroller');
const express = require('express');
const upload = require('../middleware/multer');

const Songroute = express.Router();

Songroute.post('/add',upload.fields([{name:'image',maxCount:1},{name:'audio',maxCount:1}]), addsong);
Songroute.get('/list', listsong);

module.exports = Songroute;