import React from "react";
import Friend from "./Friend";

const FriendsList = (props) => {
  return (
    <div>
      {props.friends.map((friend) => (
        <div key={friend.id}>
          <Friend friend={friend} updateFriends={props.updateFriends} />
        </div>
      ))}
    </div>
  );
};

export default FriendsList;
