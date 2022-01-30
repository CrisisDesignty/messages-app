import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const mySchema = new Schema({
    user: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }], 
    message: {
        type: String,
        required: true,
    },
    date: Date,
}, { collection: 'messages' },)

const myModel = mongoose.model('messages', mySchema);

export default myModel;
