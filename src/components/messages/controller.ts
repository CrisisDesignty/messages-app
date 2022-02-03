import { fileURLToPath } from "url";

const store = require('./store');

const addMessage = (chat, user:string, message:string, file)  => {
    return new Promise((resolve, reject) => { 
        if (!chat || !message || !message) {
            console.error('[message controller] No hay usuario o mensaje');
            reject('Ilegal Data')
            return false
        }

        let fileUrl = '';
        if(file) {
            fileUrl = 'http://localhost:3000/app/files' + file.filename;
        }

        const fullMessage = {
            chat: chat,
            user: user,
            message: message,
            date: new Date(),
            file: fileUrl,
        };
        store.add(fullMessage);
        
        resolve(fullMessage)
    })
}

const getAllMessages = (filterUser) => {
    return new Promise((resolve , reject) => {
        resolve(store.list(filterUser));
    })
} 
 
const updateMessage = async(id: string, message: string): Promise<string> => {
    if (!id || !message) throw new Error('Invalid data');
    try {
        const updateMessage: string = await store.updateText(id, message);
        return updateMessage;
    } catch(error) {
        console.log(error);
        throw new Error('Server Error, updating messsage');
    }
}

const deleteMessage = async(id: string): Promise<void> => {
    try {
        await store.remove(id)
    } catch(err) {
        console.error(err);
        throw new Error('Erro at deleted process')
    }
    
}

module.exports = {
    addMessage,
    getAllMessages,
    updateMessage,
    deleteMessage
};
