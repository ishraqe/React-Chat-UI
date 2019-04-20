import React from "react";

const LeftChat = ({ userList, clickHandler }) => {
  return (
    <div className="left">
      <div className="top">
        <input type="text" placeholder="Search" />
        <a href="javascript:;" className="search" />
      </div>
      <ul className="people">
        {userList.map((user, index) => {
          return (
            <li className="person" data-chat="person1">
              <a onClick={() => clickHandler(index)}>
                <img src={user.imgSource} alt="" />
                <span className="name">{user.name}</span>
                <span className="time">{user.time}</span>
                <span className="preview">{user.preview}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LeftChat;
