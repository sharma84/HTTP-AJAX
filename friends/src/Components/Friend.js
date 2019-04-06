import React from "react";
import "../App.css";

import axios from "axios";

const Friend = (props) => {
  const deleteFriend = (event) => {
    event.preventDefault();
    axios
      .delete(`http://localhost:5000/friends/${props.friend.id}`)
      .then((response) => {
        props.updateFriends(response.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="name-list">
      <button className="delete" onClick={deleteFriend}>
        X
      </button>
      <div className="individual-list">
        Name: {props.friend.name}, Age: {props.friend.age}, Email:{" "}
        {props.friend.email}
      </div>
    </div>
  );
};

export default Friend;
