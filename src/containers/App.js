import React, { Component } from "react";
import { GiftedChat } from "react-web-gifted-chat";

import LeftChat from "../components/LeftChat";
import RightChat from "../components/RightChat";

class App extends Component {
  componentDidMount() {
    // document
    //   .querySelector(".chat[data-chat=person2]")
    //   .classList.add("active-chat");
    // document
    //   .querySelector(".person[data-chat=person2]")
    //   .classList.add("active");
    // let friends = {
    //     list: document.querySelector("ul.people"),
    //     all: document.querySelectorAll(".left .person"),
    //     name: ""
    //   },
    //   chat = {
    //     container: document.querySelector(".container .right"),
    //     current: null,
    //     person: null,
    //     name: document.querySelector(".container .right .top .name")
    //   };
    // friends.all.forEach(f => {
    //   f.addEventListener("mousedown", () => {
    //     f.classList.contains("active") || setAciveChat(f);
    //   });
    // });
    // function setAciveChat(f) {
    //   friends.list.querySelector(".active").classList.remove("active");
    //   f.classList.add("active");
    //   chat.current = chat.container.querySelector(".active-chat");
    //   chat.person = f.getAttribute("data-chat");
    //   chat.current.classList.remove("active-chat");
    //   chat.container
    //     .querySelector('[data-chat="' + chat.person + '"]')
    //     .classList.add("active-chat");
    //   friends.name = f.querySelector(".name").innerText;
    //   chat.name.innerHTML = friends.name;
    // }
  }
  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <LeftChat />
          <RightChat />
        </div>
      </div>
    );
  }
}

export default App;
