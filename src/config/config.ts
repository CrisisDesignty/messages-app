require('dotenv').config()

const config = {
    dbHost: process.env.DB_HOST,
    dbUser: process.env.DB_USER,
    dbPass: process.env.DB_PASS,
    dbName: process.env.DB_NAME
}

const apiKey = `mongodb+srv://${config.dbUser}:${config.dbPass}@cluster0.hjgdy.mongodb.net/messages_app?retryWrites=true&w=majority`
export default  apiKey 

export {apiKey};