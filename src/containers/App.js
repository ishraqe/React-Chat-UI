import React, { Component } from "react";
import { GiftedChat } from "react-web-gifted-chat";

import LeftChat from "../components/LeftChat";
import RightChat from "../components/RightChat";
import { usersList, msgList } from "../DB/DB";

class App extends Component {
  state = {
    userList: null,
    msgList: null,
    activeChat: null
  };
  componentDidMount() {
    this.setState(
      {
        userList: usersList(),
        msgList: msgList()
      },
      () => {
        this.setCurrentChat();
      }
    );
  }
  setCurrentChat = () => {
    if (this.state.userList) {
      let usrList = this.state.userList;
      let currentUser = usrList[0];
      this.setState({
        activeChat: currentUser
      });
    }
  };
  onClick = index => {
    let usrList = this.state.userList;
    let currentUser = usrList[index];
    this.setState({
      activeChat: currentUser
    });
  };
  renderChat = () => {
    if (this.state.userList) {
      return (
        <>
          <LeftChat
            userList={this.state.userList}
            activeChat={this.state.activeChat}
            clickHandler={this.onClick}
          />
          <RightChat
            msgList={this.state.msgList}
            activeChat={this.state.activeChat}
          />
        </>
      );
    }
  };

  render() {
    return (
      <div className="wrapper">
        <div className="container">{this.renderChat()}</div>
      </div>
    );
  }
}

export default App;
