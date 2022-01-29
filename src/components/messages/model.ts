import { Schema, model } from 'mongoose';


const mySchema = new Schema({
    user: String,
    message: {
        type: String,
        required: true,
    },
    date: Date,
}, { collection: 'messages' });

const myModel = model('messages', mySchema);

export default myModel;
