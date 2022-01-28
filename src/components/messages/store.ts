const list = [];

const addMessages = (message) => {
    list.push(message);
}

const getMessages = () => {
    return list;
}

module.exports = {
    add: addMessages,
    list: getMessages
}