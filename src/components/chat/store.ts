import Model from './model';
import { ChatM } from '../../utils/interfaces';
import { dbConnect } from '../../db/db'

dbConnect()

const addChat = async (chat: ChatM[]): Promise <ChatM[]> => {
    try {
        const myChat = await new Model(chat);
        const chatReturn = await myChat.save()
        return chatReturn
    } catch(err) {
        console.error(err)
        throw new Error(err);
    }
} 


const listChats = (userId) => {
    return new Promise((resolve, reject) => {
        let filter = {};
        if(userId) {
            filter = {
                users: userId
            }
        }
        Model.find(filter)
            .populate('users')
            .exec((err, populated) => {
                if(err) {
                    reject(err);
                    return false;
                }
                resolve(populated)
            })
    })
}

export = {
    add: addChat,
    list: listChats
}