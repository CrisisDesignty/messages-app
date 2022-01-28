
const store = require('./store');

const addMessage = (user:string, message:string) => {
    return new Promise((resolve, reject) => { 
        if (!user || !message) {
            console.error('[message controller] No hay usuario o mensaje');
            return reject('Ilegal Data');
        }
        const fullMessage = {
            user: user,
            message: message,
            date: new Date()
        };
        store.add(fullMessage);
        
        resolve(fullMessage)
    })
}

const getAllMessages = () => {
    return new Promise((resolve , reject) => {
        resolve(store.list());
    })
} 

module.exports = {
    addMessage,
    getAllMessages
};
