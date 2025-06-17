import React from "react";

const UserStatus = ({ loggedIn, isAdmin }) => {
  if (loggedIn === true && isAdmin === true) {
    return <h1>Welcome Admin</h1>;
  } else if (loggedIn === true && isAdmin === false) {
    return <h1>Welcome user</h1>;
  }
};

export default UserStatus;
