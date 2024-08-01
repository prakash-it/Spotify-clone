const mongoose  = require('mongoose')

const database = ()=>{
    
    mongoose.connect(`${process.env.DB_url}`)

mongoose.connection.on('connected',()=>{
    console.log("Data base is connected");
})

}


module.exports =database