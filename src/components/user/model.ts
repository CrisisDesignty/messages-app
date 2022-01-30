import { Schema, model, Document } from 'mongoose';
// import { User } from '../../utils/interfaces';

const mySchema = new Schema({
    name: String,
    registerDate: Date, 
    }, 
    { collection: "chatUsers" },
);

interface User extends Document {
    name: string;
    registerDate: Date;
}

const myModel = model<User>('User', mySchema);

export default myModel;
