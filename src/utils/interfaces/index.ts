//User Interface
export interface User  {
    name: String;
    registerDate: Date;
}

// Message Interface
export interface Message {
    user: String;
    message: String;
    date: Date;
}

// Chats interface
export interface ChatM {
    users: String[];
}