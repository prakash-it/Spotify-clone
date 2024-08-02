const express = require('express');
const{addAlbum,listAlbum,removeAlbum} = require('../controllers/albumcontroller')
const upload = require('../middleware/multer');

const Albumrouter = express.Router() 

Albumrouter.post('/add', upload.single('image'), addAlbum)

Albumrouter.get('/list', listAlbum)
Albumrouter.post('/ remove',removeAlbum)





module.exports = Albumrouter