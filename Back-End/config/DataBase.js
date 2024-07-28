const mongoose  = require('mongoose')

const database = async()=>{

mongoose.connection.on('connected',()=>{
    console.log("Data base is connected");
})

    await mongoose.connect(`${process.env.DB_url}/spotify`)

}


module.exports =database