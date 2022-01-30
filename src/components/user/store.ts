import Model from './model';
import { dbConnect } from '../../db/db'
import { User } from '../../utils/interfaces';

dbConnect()

const addUsers = async(user: User): Promise<User> => {
    try {
        const myUser = new Model(user);
        const userAdded = myUser.save();
        return userAdded;
    } catch(err) {
        throw new Error(err);
    };
}

const listUsers = async(): Promise<User[]> => {
    try {
        const allUsers: User[] = await Model.find();
        return allUsers;
    } catch(err) {
        throw new Error(err);
    }
}


export = {
    add: addUsers,
    list: listUsers
}