const cloudinary = require('cloudinary').v2;
const Song = require('../models/songmodel.js');

const addsong = async (req, res) => {
    try {
        const { name, desc, album } = req.body;
        const audioFile = req.files?.audio?.[0];
        const imageFile = req.files?.image?.[0];

        if (!audioFile || !imageFile) {
            return res.status(400).json({ message: 'Audio and image files are required' });
        }

        const audioUpload = await cloudinary.uploader.upload(audioFile.path, { resource_type: "video" });
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" });

        const duration = `${Math.floor(audioUpload.duration / 60)}:${Math.floor(audioUpload.duration % 60)}`;

        const songData = {
            name,
            desc,
            album,
            image: imageUpload.secure_url,
            file: audioUpload.secure_url,
            duration
        };

        const newSong = new Song(songData);
        await newSong.save();

        res.status(200).json({ message: 'Song added successfully', newSong });
    } catch (err) {
        res.status(500).json({ message: 'Server Error', error: err.message });
    }
};

const listsong = async (req, res) => {
    try { 
        const allsongs = await Song.find({})
        
        res.status(200).json(allsongs)

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error', error: err.message });
    }
};

const removeSong = async (req, res) => {
    try {
        await Song.findByIdAndDelete(req.body.id);
        res.status(200).json({ success: true, message: "Song removed" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

module.exports = { addsong, listsong, removeSong };
