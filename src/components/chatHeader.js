import React from "react";
import { Chat, MoreVert, Update, Search, AttachFile } from "@material-ui/icons";

const ChatHeader = () => {
  return (
    <>
      <div className="chat__header-container">
        <div className="chat__header__profile">
          <img
            className="chat__header__img"
            src="http://uglyhousephotos.com/wp-content/uploads/2019/02/batmane3-1.jpg"
            alt=""
          />
          <div className="chat__header__settings-container">
            <ul className="chat__header__settings--list">
              <li className="chat__header__settings--item">
                <a href="chat__header__settings--link">
                  <Update className="chat__header__settings--icon" />
                </a>
              </li>
              <li className="chat__header__settings--item">
                <a href="chat__header__settings--link">
                  <Chat className="chat__header__settings--icon" />
                </a>
              </li>
              <li className="chat__header__settings--item">
                <a href="chat__header__settings--link">
                  <MoreVert className="chat__header__settings--icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="chat__header__message_header">
          <div className="current__user">
            <div className="current__user--profile">
              <img
                className="current__user--img"
                src="http://uglyhousephotos.com/wp-content/uploads/2019/02/batmane3-1.jpg"
                alt=""
              />
              <div className="current__user--info">
                <span className="name">Ish</span>
                <span className="time">Last seen thursday</span>
              </div>
            </div>
            <div className="current__user--settings">
              <ul className="settings--list">
                <li className="settings--item">
                  <a href="#" className="settings--link">
                    <Search className="settings--icon" />
                  </a>
                </li>
                <li className="settings--item">
                  <a href="#" className="settings--link">
                    <AttachFile className="settings--icon" />
                  </a>
                </li>
                <li className="settings--item">
                  <a href="#" className="settings--link">
                    <MoreVert className="settings--icon" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatHeader;
