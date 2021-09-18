const mongoose = require('mongoose')

const myDatabase = async () => {
  try {
    const conn = await  mongoose.connect(process.env.mongodbURI)
    console.log(`database is connected: ${conn.connection.host}`.cyan.underline )
  } catch (error) {
    console.error(`Error :${error.message}`)
    process.exit(1)
  }
} 


module.exports = myDatabase