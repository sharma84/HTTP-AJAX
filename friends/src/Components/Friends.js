import React from "react";
import "../App.css";
import axios from 'axios';

const Friends = (props) => {
  //const friend = props.friends.find((friend) => friend.id === props.match.params.id);

  const deleteFriendButton = (id) => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then((response) => {
        //this.setState({ friends: response.data });
        props.updatedFriendsArray(response.data)
        //props.history.push('/');
      })
      .catch((err) => console.log(err));
  };


  
  return (
    <div className="name-list">
      <button
        className="delete"
        onClick={deleteFriendButton}
      >
        X
      </button>
      <div className="individual-list">
        Name: {props.friend.name}, Age: {props.friend.age}, Email:{" "}
        {props.friend.email}
      </div>
    </div>
  );
};

export default Friends;
