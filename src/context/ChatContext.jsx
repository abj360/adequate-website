import React, { createContext, useState, useContext } from 'react';

// Create a Context for the chat feature
const ChatContext = createContext();

// Create a Provider component
export const ChatProvider = ({ children }) => {
    const [isChatOpen, setChatOpen] = useState(false);
    const [messages, setMessages] = useState([]);

    const toggleChat = () => setChatOpen(prevState => !prevState);

    const addMessage = (message) => {
        setMessages(prevMessages => [...prevMessages, message]);
    };

    return (
        <ChatContext.Provider value={{ isChatOpen, toggleChat, messages, addMessage }}>
            {children}
        </ChatContext.Provider>
    );
};

// Custom hook to use the ChatContext
export const useChat = () => useContext(ChatContext);
