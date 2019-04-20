import React from "react";
import { usersList } from "../DB/DB";

const LeftChat = () => {
  console.log(usersList());
  return (
    <div className="left">
      <div className="top">
        <input type="text" placeholder="Search" />
        <a href="javascript:;" className="search" />
      </div>
      <ul className="people">
        {usersList().map(user => {
          return (
            <li className="person" data-chat="person1">
              <img src={user.imgSource} alt="" />
              <span className="name">{user.name}</span>
              <span className="time">{user.time}</span>
              <span className="preview">{user.preview}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LeftChat;
