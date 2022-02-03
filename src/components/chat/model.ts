import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const mySchema = new Schema({
    users: [{
        type: Schema.Types.ObjectId,
        ref: 'chatUsers'
    }] 
})

const model = mongoose.model('Chat', mySchema);

export default model;