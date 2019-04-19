import React from "react";

const UserList = props => {
  return (
    <div className="users__container">
      <ul className="users__list">
        {props.users.map(user => {
          return (
            <li className="users__item">
              <a className="users__link">{user}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UserList;
