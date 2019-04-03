import React from "react";
import Friends from "./Friends";

const FriendsList = (props) => {
  return (
    <div>
      {props.friends.map((friend) => (
        <div key={friend.id}>
          <Friends friend={friend} />
        </div>
      ))}
    </div>
  );
};

export default FriendsList;
