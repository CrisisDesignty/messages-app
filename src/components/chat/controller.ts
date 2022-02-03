import store from './store';
import { ChatM } from '../../utils/interfaces'

const addChat = async (users: string): Promise <ChatM[]> => {
    !users || !Array.isArray(users);
    try {
        const chat: ChatM = {
            users: [users],
        }   
        return store.add([chat])

    } catch(err) {
        throw new Error(err);
    }
}

const listChats = async (userId: {users: string}) => {
    return store.list(userId);
}

export = {
    add: addChat,
    list: listChats
}