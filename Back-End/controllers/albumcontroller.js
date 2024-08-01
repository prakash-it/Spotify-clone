const cloudinary = require('cloudinary').v2;
const Album = require('../models/Albummodel');

const addAlbum = async (req, res) => {
    try {
        const { name, desc, bgcolor } = req.body;
        const imageFile = req.file;

        if (!imageFile) {
            return res.status(400).json({ message: "No image file uploaded" });
        }

        // Upload image to Cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" });

        const albumData = {
            name,
            desc,
            bgColor: bgcolor, // Ensure this matches the model field name
            image: imageUpload.secure_url
        };

        const newAlbum = new Album(albumData);
        await newAlbum.save();
        res.status(200).json({ message: "Album added successfully", newAlbum });

    } catch (error) {
        res.status(500).json({ message: error.message });
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
        const { id } = req.body;
        if (!id) {
            return res.status(400).json({ success: false, message: "Album ID is required" });
        }
        await Album.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Album removed successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = { addAlbum, listAlbum, removeAlbum };
