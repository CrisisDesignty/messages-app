import store from './store';
import { User } from '../../utils/interfaces';

const addUser = async(user: User): Promise<User> => {
    try {
        !user && Promise.reject('Invalid User');
        const userAdded: User = await store.add(user) ;
        return userAdded;
    } catch(err) {
        console.error(err)
        throw new Error(`Server error while adding new user ${err}`) 
    };
};

const listUsers = async(): Promise<User[]> => {
    try {
        const userList: User[] = await store.list();
        return userList;
    } catch(err) {
        throw new Error(err)
    }
}

export {
    addUser,
    listUsers
}