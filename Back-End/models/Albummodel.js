const mongoose = require('mongoose')

const album = new mongoose.Schema({

    name:{type:String,required:true},
    desc:{type:String,required:true},
    bgColor:{type:String,required:true},
    image:{type:String,required:true}
})


const albumschema = mongoose.model("albumsongs", album)

module.exports = albumschema