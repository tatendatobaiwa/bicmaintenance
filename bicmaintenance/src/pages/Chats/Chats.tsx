import React, { useState, useEffect } from 'react';
import { FiMessageSquare, FiClock, FiCheck, FiX } from 'react-icons/fi';
import './Chats.css';

const Chats = ({ userRole }) => {
  const [conversations, setConversations] = useState([
    {
      id: 1,
      faultId: 'A204-Plumbing',
      participants: ['Student', 'Maintenance'],
      messages: [
        { sender: 'Student', text: 'The sink is leaking.', timestamp: '10:00 AM' },
        { sender: 'Maintenance', text: 'We’ll check it out today.', timestamp: '10:15 AM' },
      ],
      status: 'Pending',
    },
    {
      id: 2,
      faultId: 'B105-Electrical',
      participants: ['Student', 'Maintenance'],
      messages: [
        { sender: 'Student', text: 'The light in my room is not working.', timestamp: '09:00 AM' },
        { sender: 'Maintenance', text: 'We’ll fix it by tomorrow.', timestamp: '09:30 AM' },
      ],
      status: 'Scheduled',
    },
  ]);

  const [activeConversation, setActiveConversation] = useState(null);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    const updatedConversations = conversations.map((conv) =>
      conv.id === activeConversation.id
        ? {
            ...conv,
            messages: [
              ...conv.messages,
              { sender: userRole, text: newMessage, timestamp: new Date().toLocaleTimeString() },
            ],
          }
        : conv
    );

    setConversations(updatedConversations);
    setNewMessage('');
  };

  const handleProposeTime = () => {
    const updatedConversations = conversations.map((conv) =>
      conv.id === activeConversation.id
        ? {
            ...conv,
            messages: [
              ...conv.messages,
              {
                sender: 'Maintenance',
                text: 'We propose to fix this at 3:00 PM tomorrow. Please confirm.',
                timestamp: new Date().toLocaleTimeString(),
              },
            ],
            status: 'Proposed',
          }
        : conv
    );

    setConversations(updatedConversations);
  };

  const handleConfirmTime = () => {
    const updatedConversations = conversations.map((conv) =>
      conv.id === activeConversation.id
        ? { ...conv, status: 'Scheduled' }
        : conv
    );

    setConversations(updatedConversations);
  };

  return (
    <div className="chat-container">
      {/* Sidebar */}
      <div className="chat-sidebar">
        <h2>Conversations</h2>
        <ul>
          {conversations.map((conv) => (
            <li
              key={conv.id}
              className={`conversation-item ${activeConversation?.id === conv.id ? 'active' : ''}`}
              onClick={() => setActiveConversation(conv)}
            >
              <span className="fault-id">{conv.faultId}</span>
              <span className={`status-badge ${conv.status.toLowerCase()}`}>{conv.status}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Chat Area */}
      <div className="chat-main">
        {activeConversation ? (
          <>
            <div className="chat-header">
              <h3>{activeConversation.faultId}</h3>
              <span className={`status-badge ${activeConversation.status.toLowerCase()}`}>
                {activeConversation.status}
              </span>
            </div>

            <div className="chat-messages">
              {activeConversation.messages.map((msg, index) => (
                <div
                  key={index}
                  className={`message ${msg.sender === userRole ? 'sent' : 'received'}`}
                >
                  <span className="sender">{msg.sender}</span>
                  <p>{msg.text}</p>
                  <span className="timestamp">{msg.timestamp}</span>
                </div>
              ))}
            </div>

            <div className="chat-input">
              <input
                type="text"
                placeholder="Type a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <button onClick={handleSendMessage}>Send</button>

              {/* Maintenance Team Actions */}
              {userRole === 'Maintenance' && (
                <button className="propose-time" onClick={handleProposeTime}>
                  <FiClock /> Propose Time
                </button>
              )}

              {/* Student Actions */}
              {userRole === 'Student' && activeConversation.status === 'Proposed' && (
                <div className="confirmation-buttons">
                  <button className="confirm" onClick={handleConfirmTime}>
                    <FiCheck /> Confirm
                  </button>
                  <button className="reject">
                    <FiX /> Reject
                  </button>
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="no-conversation">
            <FiMessageSquare />
            <p>Select a conversation to start chatting.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chats;