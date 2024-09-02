import React from 'react';
import useChat from '../hooks/useChat';
import './chatButton.css';  // Optional: If you have specific styles for the button

const ChatButton = () => {
    const { isChatOpen, toggleChat } = useChat();

    return (
        <button className="chat-button" onClick={toggleChat}>
            {isChatOpen ? 'Close Chat' : 'Open Chat'}
        </button>
    );
};

export default ChatButton;
