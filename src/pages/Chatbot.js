import React, { useState } from 'react';
import axios from 'axios';
import './pages.css'; // Ensure to style your component

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I help you today?', user: 'bot' },
  ]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (input.trim() === '') return;

    const userMessage = { text: input, user: 'user' };
    setMessages([...messages, userMessage]);

    // Mock response from the chatbot API
    const mockResponse = (prompt) => {
      switch (prompt.toLowerCase()) {
        case 'hello':
          return 'Hi there!';
        case 'how can you help me?':
          return 'I can help you with your learning journey. Ask me anything!';
        default:
          return 'Sorry, I did not understand that.';
      }
    };

    const botMessage = { text: mockResponse(input), user: 'bot' };
    setMessages((prevMessages) => [...prevMessages, botMessage]);

    setInput('');
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`chatbot-message ${
              message.user === 'bot' ? 'bot' : 'user'
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="chatbot-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
