import db from 'mongoose';
import { apiKey } from '../config/config'; 


// MongoDb URL
const uri = apiKey;
// MongoDb Connection
db.Promise = global.Promise

const dbConnect = async(): Promise<void> => {
    try {
        await db.connect(uri) 
        console.log('[db] Succes connecting to moongose')
    } catch(err) {
        console.error('[db]', err);
    }
} 


interface Message {
    user: String,
    message: String,
    date: Date,
}

export {
    Message,
    dbConnect
}