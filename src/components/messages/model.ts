import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const mySchema = new Schema({
    chat: [{
        type: Schema.Types.ObjectId,
        ref: 'Chat'
    }],
    user: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }], 
    message: {
        type: String,
        required: true,
    },
    date: Date,
    file: String
}, { collection: 'messages' },)

const myModel = mongoose.model('messages', mySchema);

export default myModel;
