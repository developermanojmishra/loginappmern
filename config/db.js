const mongoose = require('mongoose');
const dotenv = require("dotenv")
require('colors')

const connectDb = async()=>{
    try {
        
const conn = await mongoose.connect(process.env.MONGO_URI)
console.log(`mongodb connected ${conn.connection.host}`.yellow)
    } catch (error) {
      console.log(`Error: ${error.message}`.bgRed)
      process.exit(1)  


    }
}
// export

module.exports = connectDb;