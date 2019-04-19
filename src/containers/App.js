import React, { Component } from "react";
import { GiftedChat } from "react-web-gifted-chat";

import ChatHeader from "../components/chatHeader";
import UserList from "../components/userList";
import MessageList from "../components/messageList";

class App extends Component {
  state = {
    userList: [
      "Ish",
      "Kiddo",
      "Man",
      "Tanvir",
      "Rifat",
      "Ish",
      "Kiddo",
      "Man",
      "Tanvir",
      "Rifat",
      "Ish",
      "Kiddo",
      "Man",
      "Tanvir",
      "Rifat"
    ]
  };
  render() {
    return (
      <div className="chat-section">
        <div className="chat__header">
          <ChatHeader />
        </div>
      </div>
    );
  }
}

export default App;
