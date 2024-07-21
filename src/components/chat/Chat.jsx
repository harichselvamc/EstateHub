import { useState } from "react";
import "./chat.scss";

function Chat() {
  const [chat, setChat] = useState(true);
  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        <div className="message">
          <img
            src="src\assets\user.jpeg"
            alt=""
          />
          <span>harichselvam</span>
          <p>Hi! I'm interested in the apartment next to Marina Beach.</p>
        </div>
        <div className="message">
          <img
            src="src\assets\user.jpeg"
            alt=""
          />
          <span>harichselvam</span>
          <p>Can you provide more details about it?</p>
        </div>
      </div>
      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img
                src="src\assets\user.jpeg"
                alt=""
              />
              Agent
            </div>
            <span className="close" onClick={() => setChat(null)}>X</span>
          </div>
          <div className="center">
            <div className="chatMessage">
              <p>Sure, the apartment has 2 bedrooms and 1 bathroom. It's located at 456 Beach Road, Chennai, and the price is ₹1000 per month.</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Is it available for immediate move-in?</p>
              <span>55 minutes ago</span>
            </div>
            <div className="chatMessage">
              <p>Yes, it's available right now. Would you like to schedule a visit?</p>
              <span>50 minutes ago</span>
            </div>
            <div className="chatMessage own">
              <p>Yes, please. How about tomorrow at 10 AM?</p>
              <span>45 minutes ago</span>
            </div>
            <div className="chatMessage">
              <p>That works. I will meet you at the location. Do you have any other questions?</p>
              <span>40 minutes ago</span>
            </div>
            <div className="chatMessage own">
              <p>No, that's all for now. Thank you!</p>
              <span>35 minutes ago</span>
            </div>
            <div className="chatMessage">
              <p>You're welcome! See you tomorrow.</p>
              <span>30 minutes ago</span>
            </div>
          </div>
          <div className="bottom">
            <textarea placeholder="Type your message here..."></textarea>
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat;
