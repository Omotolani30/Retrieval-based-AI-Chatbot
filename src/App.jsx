import { useState } from "react";
import "./App.css";

function App() {
  const createNewChatInstance = (id) => ({
    id: id,
    title: "New Conversation",
    messages: [
      {
        sender: "bot",
        text: "Hello! Welcome to the LAUTECH Automated Support Portal. I can assist you with official university information on several departments. What would you like to explore?",
        suggestions: ["100L Freshers Fees", "Admissions Cut-offs", "Jupeb Programmes", "Postgraduate Programmes", "ODL Programmes"]
      }
    ]
  });

  const [chats, setChats] = useState([createNewChatInstance("initial-session")]);
  const [currentChatId, setCurrentChatId] = useState("initial-session");
  const [input, setInput] = useState("");
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const activeChat = chats.find(chat => chat.id === currentChatId) || chats[0];

  async function sendMessage(textToSend) {
    const text = textToSend || input;
    if (!text.trim()) return;

    const userMessage = {
      sender: "user",
      text: text
    };


    setChats(prevChats => prevChats.map(chat => {
      if (chat.id === currentChatId) {
        const updatedMessages = [...chat.messages, userMessage];
        const isFirstUserMessage = !chat.messages.some(m => m.sender === "user");
        
        return {
          ...chat,
          title: isFirstUserMessage ? text : chat.title,
          messages: updatedMessages
        };
      }
      return chat;
    }));
    
    setInput("");

    try {
      const response = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: text
        })
      });

      const data = await response.json();

      setChats(prevChats => prevChats.map(chat => {
        if (chat.id === currentChatId) {
          return {
            ...chat,
            messages: [...chat.messages, { sender: "bot", text: data.reply }]
          };
        }
        return chat;
      }));
    } catch (error) {
      console.error("Error sending message:", error);
      setChats(prevChats => prevChats.map(chat => {
        if (chat.id === currentChatId) {
          return {
            ...chat,
            messages: [...chat.messages, { sender: "bot", text: "Sorry, I am having trouble connecting to the server right now." }]
          };
        }
        return chat;
      }));
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  const handleNewEnquiry = () => {
    const freshId = `chat_${Date.now()}`;
    const newChatSession = createNewChatInstance(freshId);
    
    setChats(prevChats => [newChatSession, ...prevChats]);
    setCurrentChatId(freshId);
    setInput("");
    setIsMobileSidebarOpen(false);
  };

  return (
    <div className="app-layout">
      <div className="mobile-top-bar">
        <button className="menu-toggle-btn" onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}>
          ===
        </button>
        <span className="mobile-title">LAUTECH AI Portal</span>
      </div>
 
      <aside className={`sidebar ${isMobileSidebarOpen ? "open" : ""}`}>
        <button className="new-enquiry-btn" onClick={handleNewEnquiry}>
          <span className="plus-icon">+</span> New Enquiry
        </button>
        
        <div className="recent-chats-section">
          <p className="section-title">RECENT CHATS</p>
          
          {chats.map((chat) => (
            <div 
              key={chat.id} 
              className={`chat-item ${chat.id === currentChatId ? "active" : ""}`}
              onClick={() => {
                setCurrentChatId(chat.id);
                setIsMobileSidebarOpen(false);
              }}
            >
              <svg className="chat-icon" viewBox="0 0 24 24" width="18" height="18">
                <path fill="currentColor" d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"/>
              </svg>
              <span className="chat-summary-text">{chat.title}</span>
            </div>
          ))}
        </div>
      </aside>

      {isMobileSidebarOpen && (
        <div className="sidebar-overlay" onClick={() => setIsMobileSidebarOpen(false)}></div>
      )}

      <main className="main-content">

        <header className="chat-header">
          <div className="header-left">
            <div className="red-accent-bar"></div>
            <h2 className="header-chat-title">{activeChat.title}</h2>
          </div>
          <div className="header-right">
            EXCELLENCE, INTEGRITY, AND SERVICE
          </div>
        </header>

        <div className="chatBox">
          {activeChat.messages.map((message, index) => (
            <div key={index} className={`message-row ${message.sender}-row`}>
              <div className={`message-bubble ${message.sender}`}>
                {message.text.includes(":") ? (
                  <span>
                    <strong>{message.text.split(":")[0]}:</strong>
                    {message.text.split(":").slice(1).join(":")}
                  </span>
                ) : (
                  message.text
                )}

                {message.suggestions && (
                  <div className="suggestions-container">
                    {message.suggestions.map((suggestion, idx) => (
                      <button 
                        key={idx} 
                        className="suggestion-pill"
                        onClick={() => sendMessage(suggestion)}
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="input-container">
          <div className="input-wrapper">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about fees, cut-off marks, JUPEB, part-time..."
            />
          </div>
          <button className="send-btn" onClick={() => sendMessage()}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;