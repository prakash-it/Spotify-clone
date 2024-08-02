const cloudinary = require('cloudinary').v2;
const Album = require('../models/Albummodel');

const addAlbum = async (req, res) => {
    try {
       const name = req.body.name
       const desc = req.body.desc
       const bgColor = req.body.bgColor
       const imageFile = req.file
       const imageUpload = await cloudinary.uploader.upload(imageFile.path,{resource_type:"image"})

       const albumData = {
        name,
        desc,
        bgColor,
        image: imageUpload.secure_url
       }
   
    const albums = Album(albumData)
    await albums.save()

    res.json({success:true, message:"Album added "})

    } catch (error) {
        res.json({success:false, message: error.message });
    }
};

const listAlbum = async (req, res) => {
    try {
        const allAlbum = await Album.find({});
        res.json({ success: true, album: allAlbum });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

const removeAlbum = async (req, res) => {
    try {
       
        res.status(200).json({ success: true, message: "Album removed successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = { addAlbum, listAlbum, removeAlbum };
