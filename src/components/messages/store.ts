import Model from './model'
import { Message } from '../../db/db';

// Add a message
const addMessage = (message: Message): void => {
    const myMessage = new Model(message);
    myMessage.save();
};

// Get all messages
const getMessages = async (filterUser): Promise<Message[]> => {
    let filter = {};

    if(filterUser != null){
        filter = {
            user: new RegExp(filterUser, "i")
        };
    }
    const messages: Message[] = await Model.find(filter);
    return messages;
}

// Update message
const updateMessage = async (id: string, message: string): Promise<string> => {
    try {
        const updatedMessage = await Model.findById(
            { _id: id },
            { message },
            { new: true}
        );
        return updatedMessage;
    } catch(err) {
        console.error(err);
        throw new Error('Error trying to update')
    }
};

// Delete message
const removeMessage = async (id: string): Promise<any> => {
    try {
        await Model.deleteOne({
            _id: id
        });
    } catch(err){
        console.error(err);
        throw new Error('Error internal')
    }
}

export = {
    add: addMessage,
    list: getMessages,
    updateText: updateMessage,
    remove: removeMessage
}

// const addMessages = (message) => {
//     list.push(message);
// }

// const getMessages = () => {
//     return list;
// }

// module.exports = {
//     add: addMessages,
//     list: getMessages
// 