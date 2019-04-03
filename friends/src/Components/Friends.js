import React from "react";
import "../App.css";

const Friends = (props) => {
  return (
    <div className="name-list">
      <div className="individual-list">
        Name: {props.friend.name}, Age: {props.friend.age}, Email:{" "}
        {props.friend.email}
      </div>
    </div>
  );
};

export default Friends;
